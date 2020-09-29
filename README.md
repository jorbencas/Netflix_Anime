# Cosas de Anime
Proyecto Anime realizado con la siguientes tecnologias, frameworks y librerias:
* NodeJS 
* React
* React Native

### Definición del esquema de cada miniproyecto
    Front-end - Backend

    React - NodeJS

    React Native - NodeJS

### Configuración del proyecto
------
* Enlace simbolico del contenido media en linux: sudo ln -s /media/jorge/9A3EB3183EB2EBFF/media/ /var/www/html/Anime/php

------ 
* Instalación de apache2: 
    - sudo apt-get update && sudo apt-get upgrade 
    - sudo apt install -y apache2 apache2-utils
    - sudo systemctl status apache2
    - apache2 -v
   
* Conectar postgresql con pgadmin4 

    -    sudo nano /etc/postgresql/12/main/postgresql.conf

            listen_addresses = '*' 

    -    sudo nano /etc/postgresql/12/main/pg_hba.conf

        -    local all postgres trust 
        
            Añadir al final del fichero
            
        -    host all all 127.0.0.1:128 trust 

    -   sudo passwd postgres
    -   su postgres
    -    psql

        -    alter user postgres with password 'postgres';
        
    -    sudo systemctl restart postgresql.service / sudo /etc/init.d/postgresql restart

*    Instalar pgadmin4 

    -    wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

    -    echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" |sudo tee  /etc/apt/sources.list.d/pgdg.list

    -    sudo apt-get update

    -    sudo apt-get install pgadmin4 pgadmin4-apache2

    -    http://localhost/pgadmin4

    -    user: postgres@localhost

    -    password: localhost
    
* Instalar potgresql 
    -   sudo apt-get update
    -   sudo apt-get install -y postgresql-12
    -   sudo systemctl status postgresql

* Instalar node y npm en linux 
    -   sudo apt-get install wget
    -   wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
    -   source ~/.profile
    -   nvm ls-remote
    -   nvm install 12.18.4
    -   npm -v
    -   node -v
    
* Desinstalar nvm 
    -   nvm deactivate
    -   nvm uninstall v12.18.4

## Actualizar Nodejs y NPM versiones 
NVM: https://github.com/coreybutler/nvm-windows

### Modulos
Lista de Anime
-------
    Este modulo es que se utiliza para listar los animes
Blog
-------
    Este modulo es que se utiliza para listar los articulos del blog

### React Información
