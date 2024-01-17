import PropTypes from "prop-types";

function Article({ title, description }) {
  return (
    <div>
      <h2 className="card-title">{title}</h2>
      <p className="cart-description mt-4">{description}</p>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
