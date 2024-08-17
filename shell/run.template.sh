#!/bin/bash
DIR_PATH=
NODE_PATH=

cd $DIR_PATH
$NODE_PATH index.js >> ./logs/cron.log 2>&1
