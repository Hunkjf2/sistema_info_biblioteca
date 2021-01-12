# sistema_info_biblioteca


Laravel + Angular

MANUAL DO SISTEMA 

## PARTE DO BACKEND

1° PASSO:

Entre na pasta "backend" e procure um arquivo chamado .env.

2° PASSO

Entrando na pasta, coloque as informações do seu banco de dados, para que o sistema rode

OBSERVAÇÃO: 

NECESSARIO QUE O BANCO ESTEJA VÁZIO PARA QUE AS MIGRATION SEJA EXECUTADAS

3° PASSO

Configurado o arquivo .env, abra o terminal, no diretório da pasta "backend"
e rode o comando:

composer install

OBSERVAÇÃO:

NECESSÁRIO QUE O COMPOSER ESTEJA INSTALADO

4° PASSO

Executado este comando para instalar as dependências
rode o comando:

php artisan migrate

5° PASSO

Executado o comando para criar as tabelas do banco 
rode o comando:

php artisan serve

Este comando irá, da um start na aplicação do Laravel


## PARTE DO FRONTEND

OBSERVAÇÃO:

NECESSÁRIO QUE O ANGULAR, ESTEJA INSTALADO, NA MÁQUINA DE FORMA GLOBAL 
E O NODE TAMBEM.


1° PASSO:

Entre no diretório "frontend" e abra o terminal, execute o comando:

npm install

para que as dependências sejam instaladas

2° PASSO:

Execute o comando:

npm i @ionic/storage@2.2.0

3° PASSO

Execute o comando:

ng serve

Para que a, aplicação do Angular seja iniciada


4° PASSO

Feito isso, abre seu navegador, e digite:

http://localhost:4200


5° PASSO

Para entrar no sistema

LOGIN COM PERFIL ADMINISTRADOR:

E-MAIL: taylor@gmail.com

SENHA: 123


LOGIN COM PERFIL CLIENTE:

E-MAIL: larissa@gmail.com

SENHA: 123

