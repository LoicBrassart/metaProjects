import { useState } from "react";
import { toast } from "react-toastify";
import api from "@services/api";

export default function Admin() {
  const [formData, setFormData] = useState({
    link: "",
    thumbSrc: "",
    title: "",
    crew: "",
  });

  const hSubmit = (evt) => {
    evt.preventDefault();
    api
      .post("/projects", formData)
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
        value={formData.thumbUrl}
        name="thumbSrc"
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
        value={formData.link}
        name="link"
        onChange={hChange}
      />
      <input
        type="text"
        placeholder="Which crew is it for ?"
        value={formData.crew}
        name="crew"
        onChange={hChange}
      />
      <input type="submit" />
    </form>
  );
}
