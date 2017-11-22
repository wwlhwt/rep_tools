#!/bin/sh

CHECKPROGRAM="check_kh.sh"

#SH_PATH=$(cd "$(dirname "$0")"; pwd) 
#cd ${SH_PATH}
#echo "current Path: ${SH_PATH}"

cd "/usr/local/khelper_d"

killall -9 ${CHECKPROGRAM}
sleep 2
nohup ./${CHECKPROGRAM}  & >/dev/null &

sleep 1

