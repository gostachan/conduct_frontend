"use client";
import axios from "axios";
import { useState } from "react";

export default function Test() {
  const [articles, setArticles] = useState([]);


  const handleClick = () => {
    axios
      .get("http://localhost:3000/articles")
      .then(response => {
        setArticles(response.data);
        console.log(articles);
      })
      .catch(() => {
        console.log("failed")
      })
  }
  return (
    <>
      <button onClick={handleClick}>test</button>
    </>
  );
}