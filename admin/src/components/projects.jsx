import {
  Datagrid,
  List,
  TextField,
  UrlField,
  ImageField,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

export function ProjectList() {
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

export function ProjectEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="link" />
        <TextInput source="title" />
        <TextInput source="thumbSrc" />
        <TextInput source="crew" />
      </SimpleForm>
    </Edit>
  );
}
