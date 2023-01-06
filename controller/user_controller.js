const db = require('../db')
// импортируем pool с помощью которого мы будем писать запросы к бд

class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body
    // на 3 строке делаем деструктизацию и получим из тела-
    // запроса имя и фамилию пользователя, body пришло из post запроса клиента.

    const newPerson = await db.query(
      `INSERT INTO person (name, surname) values ($1, $2) RETURNING * `,
      [name, surname]
    )
    // вставка в базу данных - полльзователя, в поля name, surname таблицы вставляем значения массива -наши [name, surname]
    // они подставляются вместо ($1, $2), RETURNING -говорит что после создания функция вернет пользователя

    console.log(name, surname)
    res.json(newPerson.rows[0])
    // возвращаем созданного пользователя обратно на клиент, пришел большой массив, нам надо только row поэтому [0]
  }

  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM person')
    // пишем также запрос SQL который вернет всех пользователей
    res.json(users.rows)
    // и возращаем на клиент также всех пользователей без [0] - у get запросов нет body
  }

  async getOneUser(req, res) {
    const id = req.params.id
    // тут мы из параметров запроса ('/user/:id') получаем id (тот id который передает клиент)
    const user = await db.query(`SELECT * FROM person WHERE id = $1`, [id])
    // здесь мы берем уже конкретного пользователя у которого id = id который передается параметром запроса
    res.json(user.rows[0])
    // возвращаем нужного пользователя на клиент
  }

  async updateUser(req, res) {
    const { id, name, surname } = req.body
    // получаем из тела запроса все нужные данные
    const user = await db.query(
      `UPDATE person set name = $1, surname = $2 WHERE id = $3 RETURNING * `,
      [name, surname, id]
      // указываем поля которые будем менять после set, и на место $ присваеваем значения переданные в массиве,
      // RETURNING * нужно чтобы получить измененного пользователя
    )
    res.json(user.rows[0])
    // возвращаем результат запроса на клиент
  }

  async deleteUsers(req, res) {
    const id = req.params.id
    // тут мы из параметров запроса ('/user/:id') получаем id (тот id который передает клиент)
    const user = await db.query(`DELETE FROM person WHERE id = $1`, [id])
    // здесь мы удаляем уже конкретного пользователя у которого id = id который передается параметром запроса
    res.json(user.rows[0])
    // возвращаем результат запроса на клиент, (в методе DELETE тела нет).
  }
}
// создали полноценные CRUD методы внутри класса

module.exports = new UserController()
//экспортируем обьект этого контроллера для использования в роутерах
