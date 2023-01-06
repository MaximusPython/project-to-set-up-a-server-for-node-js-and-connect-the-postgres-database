const express = require('express')
// импорт модуля экспресс (нужен чтобы запустить сервер)

const userRouter = require('./routes/user_routes')
// импорт юзер-роутера.js для передачи в app.use('url')

const postRouter = require('./routes/post_routes')
// импорт пост-роутера.js для передачи в app.use('url')

const PORT = process.env.PORT || 8888
// задаем порт из системных переменных, если она не задана то 8888

const app = express()
// из экспресса создали сам сервер

app.use(express.json())
// У нас была ошибка при передачи данных о невозможности деструктиризации поля name,
// это происходит потому что express по умолчанию не распарсить json строку,
// поэтому мы тут явно ему это указываем, передавая функцию json из express

app.use('/api', userRouter)
// создали url по которому этот роутер будет обрабатывать
// вторым параметром передали сам юзер-роутер (ранее импортированного)

app.use('/api', postRouter)
// зарегистрировали еще один роутер для передачи постов
// вторым параметром передали сам пост-роутер (ранее импортированного)

app.listen(PORT, () => console.log(`наш сервер запустился на порту ${PORT}`))
// заставлили этот сервер слушать порт
