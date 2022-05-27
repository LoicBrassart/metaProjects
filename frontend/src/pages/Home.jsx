import WebsiteCard from "@components/WebsiteCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/projects").then(({ data }) => {
      setWebsites(data);
    });
  }, []);

  return (
    <>
      <h2>2203-JS</h2>
      {websites.map((website) => {
        return (
          <WebsiteCard
            key={website.id}
            link={website.link}
            title={website.title}
            thumbSrc={website.thumbSrc}
          />
        );
      })}
    </>
  );
}
