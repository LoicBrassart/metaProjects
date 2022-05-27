import propTypes from "prop-types";
import SWebsiteCard from "./style";

export default function WebsiteCard({ link, title, thumbSrc }) {
  return (
    <SWebsiteCard>
      <figure>
        <picture>
          <img src={thumbSrc} alt="" />
        </picture>
        <figcaption>{title}</figcaption>
      </figure>
      <div>
        <a href={link}>
          <h3>{title}</h3>
        </a>
      </div>
    </SWebsiteCard>
  );
}
WebsiteCard.propTypes = {
  link: propTypes.string.isRequired,
  title: propTypes.string,
  thumbSrc: propTypes.string.isRequired,
};
WebsiteCard.defaultProps = {
  title: "N/A",
};
