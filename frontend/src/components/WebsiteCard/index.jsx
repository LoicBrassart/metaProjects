import propTypes from "prop-types";

export default function WebsiteCard({ link, title, thumbSrc }) {
  return (
    <article>
      <a href={link}>
        <h3>{title}</h3>
      </a>
      <img src={thumbSrc} alt="" />
    </article>
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
