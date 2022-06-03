import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Admin() {
  const [formData, setFormData] = useState({
    url: "",
    img: "",
    title: "",
  });

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/projects", formData)
      .then(() => {
        toast("Wow so easy!");
      })
      .catch(() => {
        toast.error("Aww, it broke!");
      });
  };
  const hChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form action="" onSubmit={hSubmit}>
      <input
        type="url"
        placeholder="Url for your image"
        value={formData.img}
        name="img"
        onChange={hChange}
      />
      <input
        type="text"
        placeholder="Name of your project"
        value={formData.title}
        name="title"
        onChange={hChange}
      />
      <input
        type="url"
        placeholder="Url for your website"
        value={formData.url}
        name="url"
        onChange={hChange}
      />
      <input type="submit" />
    </form>
  );
}
