import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();

  const location = useLocation();
  const bookID = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/books/${bookID}`, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form">
      <h1>Update book</h1>
      <input
        placeholder="Title"
        type="text"
        name="title"
        id=""
        onChange={handleChange}
      />
      <input
        placeholder="Description"
        type="text"
        name="desc"
        id=""
        onChange={handleChange}
      />
      <input
        placeholder="Price"
        type="number"
        name="price"
        id=""
        onChange={handleChange}
      />
      <input
        placeholder="Image"
        type="text"
        name="cover"
        id=""
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Update;
