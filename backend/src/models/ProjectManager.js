const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (link, title, thumbSrc, crew) values (?,?,?,?)`,
      [project.url, project.title, project.img, "2203-JS"]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectManager.table} set link=?, title = ?,thumbSrc=?, crew=? where id = ?`,
      [project.link, project.title, project.thumbSrc, project.crew, project.id]
    );
  }
}

module.exports = ProjectManager;
