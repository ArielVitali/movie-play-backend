class UsersDao {
  constructor() {}

  async createUsersTable() {
    await db.query(`
          CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL
          );
      `);
  }
  async getUserById(id) {
    const query = `SELECT * FROM users WHERE id = $1`;
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
  async updateUser(id, name, avatar) {
    const query = `UPDATE users SET email = $1, password = $2 WHERE id = $3 RETURNING *`;
    const result = await db.query(query, [email, password, id]);
    return result.rows[0];
  }
  async deleteUser(id) {
    const query = `DELETE FROM users WHERE id = $1`;
    await db.query(query, [id]);
  }
}

export default UsersDao;
