import { Admin, Resource } from "react-admin";
import { ProjectList, ProjectEdit, ProjectCreate } from "@components/projects";
import { UserEdit, UserList } from "@components/users";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="projects"
        list={ProjectList}
        edit={ProjectEdit}
        create={ProjectCreate}
      />
      {/* <Resource name="users" list={ListGuesser} /> */}
      <Resource name="users" list={UserList} edit={UserEdit} />
    </Admin>
  );
}

export default App;
