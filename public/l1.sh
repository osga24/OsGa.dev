#!/bin/bash
set -euo pipefail

# Ubuntu 20.04 專用：安裝 docker.io + docker-compose、下載專案、加群組
WORKDIR="/tmp/Linux_Command/deploy"
ZIP="/tmp/Linux_Command.zip"
export DEBIAN_FRONTEND=noninteractive

echo "[清理] /tmp/Linux_Command"
rm -rf /tmp/Linux_Command

echo "[前置] 安裝必要工具 (wget unzip sshpass netcat-openbsd)"
sudo apt-get update -y
sudo apt-get install -y wget unzip sshpass netcat-openbsd

echo "[安裝] docker.io 與 docker-compose (apt)"
sudo apt-get install -y docker.io docker-compose

echo "[下載] Linux_Command 專案到 $ZIP"
wget -q https://osga.dev/Linux_Command.zip -O "$ZIP"

echo "[解壓] 到 /tmp/Linux_Command"
unzip -oq "$ZIP" -d /tmp

if [ ! -d "$WORKDIR" ]; then
	echo "[錯誤] 找不到 $WORKDIR，請確認壓縮檔內容"
	exit 1
fi

echo "[設定] 將 $USER 加入 docker 群組（使 docker 可免 sudo）"
sudo usermod -aG docker "$USER"

cat <<'NOTE'

[下一步]
- 請先「登出再登入」終端機（或執行： newgrp docker），讓群組變更生效。
- 接著執行第二個腳本： ./run_stack_after_relogin.sh

NOTE
