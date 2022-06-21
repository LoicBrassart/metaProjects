import { Datagrid, List, TextField, UrlField, ImageField } from "react-admin";

export default function ProjectList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <UrlField source="link" />
        <TextField source="title" />
        <ImageField source="thumbSrc" />
        <TextField source="crew" />
      </Datagrid>
    </List>
  );
}
