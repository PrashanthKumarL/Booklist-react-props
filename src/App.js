import "./App.css";
import Book from "./Book";

function App() {
  const books = [
    {
      image:
        "https://m.media-amazon.com/images/I/411OtAf040L._SX322_BO1,204,203,200_.jpg",
      title: "Indian Polity",
      author: "M Laxmikanth",
      id: 1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41eEoeTPe+L._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg",
      title: "CBSE Sample Papers",
      author: "Shivadas",
      id: 2,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      id: 3,
    },
  ];

  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <>
      <h1>Amazon best sellers</h1>
      <div className="app">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </div>
    </>
  );
}

export default App;
