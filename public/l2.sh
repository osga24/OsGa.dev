#!/bin/bash
set -euo pipefail

WORKDIR="/tmp/Linux_Command/deploy"
SSH_HOST="127.0.0.1"
SSH_PORT="9487"
SSH_USER="ctfuser"
SSH_PASS="password"
export DEBIAN_FRONTEND=noninteractive

# 確認 docker 免 sudo 可用（若失敗，代表尚未重新登入或 newgrp）
if ! docker info >/dev/null 2>&1; then
	echo "[警告] 目前 docker 似乎無法免 sudo 執行。"
	echo "       請先重新登入終端機，或執行： newgrp docker"
	exit 1
fi

# 啟動 Docker 服務
echo "[啟動] Docker 服務"
if command -v systemctl >/dev/null 2>&1; then
	sudo systemctl enable docker || true
	sudo systemctl start docker || true
else
	sudo service docker start || true
fi

# 等待 dockerd
echo -n "[等待] Docker daemon 啟動中"
for i in {1..30}; do
	if docker info >/dev/null 2>&1; then
		echo " ... OK"
		break
	fi
	echo -n "."
	sleep 1
	if [ "$i" -eq 30 ]; then
		echo
		echo "[錯誤] Docker daemon 未就緒"
		exit 1
	fi
done

# 進入專案
if [ ! -d "$WORKDIR" ]; then
	echo "[錯誤] 找不到 $WORKDIR，請先跑 setup_docker_ubuntu2004.sh"
	exit 1
fi
cd "$WORKDIR"

# 檢查 compose 檔
if [ ! -f docker-compose.yml ]; then
	echo "[錯誤] 當前資料夾沒有 docker-compose.yml，無法啟動"
	exit 1
fi

# 用 apt 版的舊 CLI 啟動（docker-compose）
echo "[執行] docker-compose up --build -d"
docker-compose up --build -d

# 保險：若沒 sshpass 就補裝（某些環境可能沒安裝到）
if ! command -v sshpass >/dev/null 2>&1; then
	echo "[補裝] sshpass"
	sudo apt-get update -y
	sudo apt-get install -y sshpass
fi

# 等待 SSH port
echo -n "[等待] SSH 服務啟動中 (port $SSH_PORT)"
for i in {1..40}; do
	if nc -z "$SSH_HOST" "$SSH_PORT" >/dev/null 2>&1; then
		echo " ... OK"
		break
	fi
	echo -n "."
	sleep 1
	if [ "$i" -eq 40 ]; then
		echo
		echo "[警告] 連接埠未開啟；將用實際握手重試"
	fi
done

# 實際握手（更穩）
echo -n "[等待] SSH 實際握手"
for i in {1..40}; do
	if sshpass -p "$SSH_PASS" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=2 -p "$SSH_PORT" \
		"$SSH_USER@$SSH_HOST" 'echo ready' >/dev/null 2>&1; then
		echo " ... OK"
		break
	fi
	echo -n "."
	sleep 1
	if [ "$i" -eq 40 ]; then
		echo
		echo "[錯誤] SSH 仍未就緒，請用 'docker-compose logs' 檢查容器日誌"
		exit 1
	fi
done

# 登入
echo "[連線] SSH 登入 $SSH_USER@$SSH_HOST -p $SSH_PORT"
exec sshpass -p "$SSH_PASS" ssh -o StrictHostKeyChecking=no -p "$SSH_PORT" "$SSH_USER@$SSH_HOST"
