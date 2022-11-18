import { useState, useEffect } from "react";
import "./../../App.css";

export const Quote = ({ quote, author, getStoicc }) => {
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
