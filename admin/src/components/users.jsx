import {
  Edit,
  SimpleForm,
  TextInput,
  Datagrid,
  EmailField,
  List,
  TextField,
} from "react-admin";

export function UserList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <EmailField source="email" />
      </Datagrid>
    </List>
  );
}

export function UserEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="email" />
        <TextInput source="password" />
      </SimpleForm>
    </Edit>
  );
}
