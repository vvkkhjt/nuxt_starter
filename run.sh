#!/bin/bash

echo "nodejs start...."
pm2 start build/main.js --no-daemon
