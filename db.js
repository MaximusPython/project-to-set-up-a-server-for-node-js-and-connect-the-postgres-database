const Pool = require('pg').Pool
// ипортируем пул из пакета pg (для работы с бд postgres)

const pool = new Pool({
  // создаем обьект этого класса где в конструкторе передаем данные для подключения
  // к нашей бд postgres
  user: 'postgres',
  password: 'mypost2',
  host: 'localhost',
  port: 5433,
  database: 'node_postgres',
})

module.exports = pool
