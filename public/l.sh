#!/bin/bash
set -euo pipefail

WORKDIR="/tmp/Linux_Command/deploy"

# ---- 清理舊檔 ---------------------------------------------------------------
rm -rf /tmp/Linux_Command

# ---- 前置工具 ---------------------------------------------------------------
if ! command -v wget >/dev/null 2>&1 || ! command -v unzip >/dev/null 2>&1; then
	echo "[安裝中] 下載與解壓工具 (wget, unzip)"
	if command -v apt-get >/dev/null 2>&1; then
		sudo apt-get update -y
		sudo apt-get install -y wget unzip
	elif command -v dnf >/dev/null 2>&1; then
		sudo dnf install -y wget unzip
	elif command -v yum >/dev/null 2>&1; then
		sudo yum install -y wget unzip
	else
		echo "[錯誤] 找不到可用的套件管理器，請先手動安裝 wget 與 unzip"
		exit 1
	fi
fi

# ---- 下載與解壓 -------------------------------------------------------------
echo "[下載] Linux_Command 專案到 /tmp"
wget -q https://osga.dev/Linux_Command.zip -O /tmp/Linux_Command.zip

echo "[解壓] 到 /tmp/Linux_Command"
unzip -oq /tmp/Linux_Command.zip -d /tmp

# ---- 進入專案 ---------------------------------------------------------------
if [ -d "$WORKDIR" ]; then
	cd "$WORKDIR"
else
	echo "[錯誤] 找不到 $WORKDIR 目錄"
	exit 1
fi

# ---- 安裝 Docker ------------------------------------------------------------
if ! command -v docker >/dev/null 2>&1; then
	echo "[安裝中] Docker CE (官方腳本)"
	curl -fsSL https://get.docker.com | sudo sh
else
	echo "[OK] Docker 已安裝"
fi

# ---- 啟動 Docker 服務 -------------------------------------------------------
echo "[啟動] Docker 服務"
if command -v systemctl >/dev/null 2>&1; then
	sudo systemctl enable docker || true
	sudo systemctl start docker || true
elif command -v service >/dev/null 2>&1; then
	sudo service docker start || true
elif command -v rc-service >/dev/null 2>&1; then
	sudo rc-service docker start || true
else
	echo "[警告] 找不到可用的服務管理工具，請確認 dockerd 已啟動"
fi

# 等待 dockerd 準備就緒
echo -n "[等待] Docker daemon 啟動中"
for i in {1..20}; do
	if docker info >/dev/null 2>&1; then
		echo " ... OK"
		break
	fi
	echo -n "."
	sleep 1
	if [ "$i" -eq 20 ]; then
		echo
		echo "[錯誤] Docker daemon 未就緒"
		exit 1
	fi
done

# ---- 安裝 Docker Compose Plugin --------------------------------------------
if ! docker compose version >/dev/null 2>&1; then
	echo "[安裝中] Docker Compose Plugin"
	if command -v apt-get >/dev/null 2>&1; then
		sudo apt-get update -y
		sudo apt-get install -y docker-compose-plugin
	elif command -v dnf >/dev/null 2>&1; then
		sudo dnf install -y docker-compose-plugin
	elif command -v yum >/dev/null 2>&1; then
		sudo yum install -y docker-compose-plugin
	else
		echo "[錯誤] 無法偵測套件管理器，請手動安裝 docker-compose-plugin"
		exit 1
	fi
else
	echo "[OK] Docker Compose Plugin 已安裝"
fi

# ---- 啟動專案 ---------------------------------------------------------------
if [ ! -f docker-compose.yml ]; then
	echo "[錯誤] 當前資料夾沒有 docker-compose.yml，無法啟動"
	exit 1
fi

echo "[執行] docker compose up --build -d"
docker compose up --build -d

# ---- 安裝 sshpass -----------------------------------------------------------
if ! command -v sshpass >/dev/null 2>&1; then
	echo "[安裝中] sshpass"
	if command -v apt-get >/dev/null 2>&1; then
		sudo apt-get install -y sshpass
	elif command -v dnf >/dev/null 2>&1; then
		sudo dnf install -y sshpass
	elif command -v yum >/dev/null 2>&1; then
		sudo yum install -y sshpass
	else
		echo "[錯誤] 無法安裝 sshpass，請手動安裝後再試"
		exit 1
	fi
fi

# ---- 等待 SSH 服務可用（port 9487） ----
echo -n "[等待] SSH 服務啟動中 (port 9487)"
for i in {1..20}; do
	if nc -z 127.0.0.1 9487 >/dev/null 2>&1; then
		echo " ... OK"
		break
	fi
	echo -n "."
	sleep 1
	if [ "$i" -eq 20 ]; then
		echo
		echo "[錯誤] SSH 服務未在 port 9487 啟動"
		exit 1
	fi
done

# ---- SSH 登入 ---------------------------------------------------------------
echo "[連線] SSH 登入 ctfuser@127.0.0.1 -p 9487"
sshpass -p "password" ssh -o StrictHostKeyChecking=no ctfuser@127.0.0.1 -p 9487
