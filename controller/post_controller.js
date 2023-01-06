const db = require('../db')
// импортируем pool с помощью которого мы будем писать запросы к бд

class PostController {
  async createPost(req, res) {
    const { title, content, user_id } = req.body
    const newPost = await db.query(
      `INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`,
      [title, content, user_id]
      // переданный user_id должен совпадать с id person
    )
    res.json(newPost.rows[0])
  }

  async getPostsByUser(req, res) {
    const id = req.query.id
    // тут id мы получаем уже не из params а из query, то есть это будет не часть строки запроса,
    // а отдельный query параметр, который указывается после знака ? в url запросе, например ?id=1
    // получаем посты в этой таблице уже не по id а по user_id (http://localhost:6500/api/post?id=4)
    const posts = await db.query(`SELECT * FROM post WHERE user_id = $1`, [id])
    res.json(posts.rows)
    // возвращаем найденные строки на клиент
  }
}

module.exports = new PostController()
