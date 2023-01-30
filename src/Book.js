import "./book.css";

const Book = (props) => {
  const { image, title, author, number } = props;

  return (
    <div className="booklist">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`#${number + 1}`}</span>
    </div>
  );
};

export default Book;
