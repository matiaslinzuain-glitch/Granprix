#!/bin/bash
cd "$(dirname "$0")"
echo "Iniciando panel de administración Gran Prix..."
sleep 1
open "http://localhost:3333"
node server.js
