import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form">
      <h1>Add new book</h1>
      <input type="text" name="title" id="" onChange={handleChange} />
      <input type="text" name="desc" id="" onChange={handleChange} />
      <input type="number" name="price" id="" onChange={handleChange} />
      <input type="text" name="cover" id="" onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default Add;
