#!/bin/bash

PROGRAMNAME="khelper_d"
CHECKPROGRAM="check_kh.sh"

echo "kill ${CHECKPROGRAM}! "
ps -ef | grep ${CHECKPROGRAM}  | grep -v grep | awk  '{print $2}' | xargs -i  -t  kill -9 {} >/dev/null

echo "kill ${PROGRAMNAME}! "
ps -ef | grep ${PROGRAMNAME}  | grep -v grep | awk  '{print $2}' | xargs -i  -t  kill -9 {} >/dev/null
