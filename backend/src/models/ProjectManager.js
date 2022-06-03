const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  findAll() {
    return this.connection.query(`select * from  ${ProjectManager.table}`);
  }

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (link, title, thumbSrc, crew) values (?,?,?,?)`,
      [project.url, project.title, project.img, "2203-JS"]
    );
  }

  // update(item) {
  //   return this.connection.query(
  //     `update ${ProjectManager.table} set title = ? where id = ?`,
  //     [item.title, item.id]
  //   );
  // }
}

module.exports = ProjectManager;
