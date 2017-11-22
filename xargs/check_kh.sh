#!/bin/sh

PROGRAMNAME="khelper_d"
CHECKPROGRAM="check_kh.sh"
WORK_PATH="/usr/local/khelper_d"

#CHECK_NUM=`ps -ef | grep ${CHECKPROGRAM} | grep -v "$$" |grep -v "grep" | wc -l`
#if [ $CHECK_NUM -ge 1 ]; then
#	exit 0
#fi
   
CheckProcess()
{
    if [ "$1" = "" ]; then
        return 1
    fi
    
    PROCESS_NUM=`ps -ef | grep "$1" | grep -v "grep" | wc -l`
    if [ $PROCESS_NUM -ge 1 ]; then
      return 0
    else
      return 1
    fi
}

while [ 1 ] ; do
CheckProcess "${PROGRAMNAME}"
CheckRetVal=$?
if [ ${CheckRetVal} -eq 1 ]; then
    cd ${WORK_PATH}
    echo "current Path: ${WORK_PATH}/./${PROGRAMNAME}"
    nohup ./${PROGRAMNAME} >/dev/null &
fi

sleep 10
done


