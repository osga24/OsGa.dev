#!/bin/bash
set -euo pipefail

# Ubuntu 20.04 專用：用 apt 安裝 docker.io + docker-compose
WORKDIR="/tmp/Linux_Command/deploy"
ZIP="/tmp/Linux_Command.zip"

SSH_HOST="127.0.0.1"
SSH_PORT="9487"
SSH_USER="ctfuser"
SSH_PASS="password"

# 判斷是否有 sudo（root 環境就不需要）
if command -v sudo >/dev/null 2>&1; then
	SUDO="sudo"
else
	SUDO=""
fi

export DEBIAN_FRONTEND=noninteractive

echo "[清理] /tmp/Linux_Command"
rm -rf /tmp/Linux_Command

echo "[前置] 安裝必要工具 (wget unzip sshpass netcat-openbsd)"
$SUDO apt-get update -y
$SUDO apt-get install -y wget unzip sshpass netcat-openbsd

echo "[下載] Linux_Command 專案到 $ZIP"
wget -q https://osga.dev/Linux_Command.zip -O "$ZIP"

echo "[解壓] 到 /tmp/Linux_Command"
unzip -oq "$ZIP" -d /tmp

# 進入專案
if [ -d "$WORKDIR" ]; then
	cd "$WORKDIR"
else
	echo "[錯誤] 找不到 $WORKDIR 目錄"
	exit 1
fi

# 安裝 Docker & docker-compose（Ubuntu 20.04 的 apt 來源）
if ! command -v docker >/dev/null 2>&1; then
	echo "[安裝中] docker.io 與 docker-compose (apt)"
	$SUDO apt-get update -y
	$SUDO apt-get install -y docker.io docker-compose
else
	echo "[OK] Docker 已安裝"
	# 確保 docker-compose 也有
	if ! command -v docker-compose >/dev/null 2>&1; then
		echo "[安裝中] docker-compose (apt)"
		$SUDO apt-get install -y docker-compose
	fi
fi

# 啟動 Docker 服務
echo "[啟動] Docker 服務"
if command -v systemctl >/dev/null 2>&1; then
	$SUDO systemctl enable docker || true
	$SUDO systemctl start docker || true
else
	# Ubuntu 20.04 正常有 systemd；此分支僅預防性
	$SUDO service docker start || true
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

# 檢查 compose 檔
if [ ! -f docker-compose.yml ]; then
	echo "[錯誤] 當前資料夾沒有 docker-compose.yml，無法啟動"
	exit 1
fi

# 用舊 CLI 啟動（與 apt 裝的 docker-compose 相容）
echo "[執行] docker-compose up --build -d"
docker-compose up --build -d

# 等待 SSH 服務開在 9487
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
		echo "[警告] 連接埠已開，改用實際握手再試"
	fi
done

# 實際握手重試（更穩）
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
