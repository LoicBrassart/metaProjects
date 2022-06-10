const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, password) values (?,?)`,
      [user.email, user.password]
    );
  }

  // update(item) {
  //   return this.connection.query(
  //     `update ${ProjectManager.table} set title = ? where id = ?`,
  //     [item.title, item.id]
  //   );
  // }
}

module.exports = UserManager;
