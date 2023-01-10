УСТАНОВКА ПАКЕТОВ И ЗАВИСИМОСТЕЙ:
npm install express pg (модуль pg это модуль для работы с postgres)
npm i -D nodemon (модуль для автоматического обновления сервера на этапе разработки)

ИЗМЕНЕНИЯ в Package.json:
 создаем свои скрипты, и запуск на этапе разработки с помощью nodemon чтобы сервер автоматически обновлялся,
 nodemon необходим как dev зависимость на этапе разработки.
 
"scripts": {
 "start": "node index.js",
 "dev": "nodemon index.js"
 },


Вводим пароль от нашей базы данных в shell SQL.
 Команды в shell SQL:
 \l   (покажет список существующих баз данных.)
 create database node_postgres; (создадим базу данных node_postgres) 
 \dt   (покажет список существующих таблиц в базе данных.)
 \connect node_postgres (подключимся к базе данных node_postgres)
