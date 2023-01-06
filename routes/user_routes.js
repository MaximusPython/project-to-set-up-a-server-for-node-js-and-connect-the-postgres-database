const Router = require('express')
// получаем роутер из экспресса

const router = new Router()
// создаем обьект этого класса

const userController = require('../controller/user_controller')
// импортируем сюда файл контроллер для использования функций которые мы определили
// в контроллерах

router.post('/user', userController.createUser)
// функция -создать пользователя (post запрос, первый параметр url, второй- функция
// которая будет отрабатывать запросы по этому url)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
// так передается id из запроса клиента
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUsers)
// тут для каждой функции определяем маршрут по которой она будет отрабатывать

module.exports = router
//экспортируем этот роутер в index.js
