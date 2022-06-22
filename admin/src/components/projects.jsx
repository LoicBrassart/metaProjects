import {
  Datagrid,
  List,
  TextField,
  UrlField,
  ImageField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PropTypes } from "prop-types";

function ProjectForm({ showIdField }) {
  return (
    <SimpleForm>
      {showIdField && <TextInput disabled source="id" />}
      <TextInput source="link" />
      <TextInput source="title" />
      <TextInput source="thumbSrc" />
      <TextInput source="crew" />
    </SimpleForm>
  );
}

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
      <ProjectForm showIdField />
    </Edit>
  );
}
export function ProjectCreate() {
  return (
    <Create>
      <ProjectForm />
    </Create>
  );
}

ProjectForm.propTypes = {
  showIdField: PropTypes.bool,
};
ProjectForm.defaultProps = {
  showIdField: false,
};
