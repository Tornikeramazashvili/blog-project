import PropTypes from "prop-types";

// Article component takes in title, description, and imageUrl as props
function Article({ title, description, imageUrl }) {
  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full object-fill" />
      )}

      <h2 className="card-title mt-3 line-clamp-1">{title}</h2>
      <p className="cart-description mt-4 line-clamp-2">{description}</p>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default Article;
