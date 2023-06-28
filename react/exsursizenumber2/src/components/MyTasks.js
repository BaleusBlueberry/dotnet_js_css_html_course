import React from "react";
import { useState } from "react";

function MyTasks() {
  const tasksInProgress = [];
  // set titel and body variables that save automatically
  const [title, setTitles] = useState("");
  const [body, setBodys] = useState("");
  const [author, setAuthor] = useState("mario");
  const [listsOfBlogs, setListsOfBlogs] = useState([]);

  const addTasks = function (e) {
    e.preventDefault();
    const blog = { title, body, author };
    // NOT Like this listsOfBlogs.push(blog);
    console.log(blog);
  };
  return (
    <div className="create-form">
      <h2>Add a New Blog</h2>
      <form onSubmit={addTasks}>
        <lable>Name:</lable>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitles(e.target.value)}
        />
        <lable>Blog body:</lable>
        <textarea
          type="text"
          value={body}
          required
          onChange={(e) => setBodys(e.target.value)}
        ></textarea>
        <lable>Blog author: </lable>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi </option>
        </select>
        <button>Add Blog</button>
      </form>
      <p>{listsOfBlogs}</p>
    </div>
  );
}

export { MyTasks };
