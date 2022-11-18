import useEffect from "react";
import "./../../App.css";

const Quote = ({ quote, author, getStoicc }) => {
  useEffect(() => {
    getStoicc();
  }, []);

  return (
    <>
      <h2>{quote}</h2>
      <p>{author}</p>
    </>
  );
};

export default Quote;
