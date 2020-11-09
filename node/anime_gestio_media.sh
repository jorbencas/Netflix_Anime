#!/bin/bash

#Obteniendo ficheros con tamaño 0
#find /media/jorge/9A3EB3183EB2EBFF/media/animes -type f -size 0

#Yuukoku no Moriarty

#https://crisanimex.com/yuukoku-no-moriarty-mega-mediafire/

#alias run_anime_client='cd ~/Documentos/Netflix_Anime/react-api/ && npm start'
#alias run_anime_server='cd ~/Documentos/Netflix_Anime/node/ && npm start'

path="/var/www/html/Anime/php";
if [ ! -d $path ]; then
    path="/var/www/Anime/php";
fi
destination_path="$HOME/Documentos/Netflix_Anime/node/backup.sql"
if [ -f $destination_path ]; then
   text="";
   $text > $destination_path
else 
    touch $destination_path
fi

x=`ls $path/backup`;
for n in $x; do
    echo "$path/backup/$n"
    if [ -d "$path/backup/$n" ]; then
        sub_path="$path/backup/$n"
        x=`ls $sub_path`;
        for m in $x; do
            echo "Fichero: $m";
            cat "$sub_path/$m" >> $destination_path;
        done;
    elif [ -f "$path/backup/$n" ]; then
        cat "$path/backup/$n" >> $destination_path
    fi
done
#tar -czfv archivo.tar.gz
#tar -xzvf archivo.tar.gz