import { Admin, Resource } from "react-admin";
import { ProjectList, ProjectEdit } from "@components/projects";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="projects" list={ProjectList} edit={ProjectEdit} />
    </Admin>
  );
}

export default App;
