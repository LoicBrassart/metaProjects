import WebsiteCard from "@components/WebsiteCard";
import { useState, useEffect } from "react";

export default function Home() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    setWebsites([
      {
        id: 1,
        link: "https://wim.fr",
        title: "Work in Music",
        thumbSrc:
          "https://www.mytrendyphone.eu/images/Forever-Music-Soul-BHS-300-Bluetooth-Headphones-with-Microphone-Black-5900495738110-17072019-01.jpg",
        crew: "2203-JS",
      },
      {
        id: 2,
        link: "https://adan.fr",
        title: "Projet ADAN",
        thumbSrc:
          "https://static1.millenium.org/articles/9/21/29/79/@/113087-bob-ross-article_m-1.jpeg",
        crew: "2203-JS",
      },
      {
        id: 3,
        link: "https://stamand-handball.fr",
        title: "St Amand Handball Club",
        thumbSrc:
          "http://www.hbc-st-amand.com/wp-content/uploads/2020/06/Logo_Saint-Amand_Handball.png",
        crew: "2203-JS",
      },
    ]);
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
