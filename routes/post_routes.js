const Router = require('express')
// получаем роутер из экспресса

const router = new Router()
// создаем обьект этого класса

const postController = require('../controller/post_controller')
// импортируем сюда файл пост-контроллер для использования функций которые мы определили
// в файле post_controller

router.post('/post', postController.createPost)
// функция -создать пост (post запрос, первый параметр url, второй параметр- функция
// которая будет отрабатывать запросы по этому url (/post))
router.get('/post', postController.getPostsByUser)

module.exports = router
//экспортируем этот роутер в index.js
