import React, { useState } from "react";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="form">
      <h1>Add new book</h1>
      <input type="text" name="title" id="" onChange={handleChange} />
      <input type="text" name="desc" id="" onChange={handleChange} />
      <input type="number" name="price" id="" onChange={handleChange} />
      <input type="text" name="cover" id="" onChange={handleChange} />
    </div>
  );
};

export default Add;
