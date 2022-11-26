import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postBook } from "../redux/features/BookSlice";
import { createPost } from "./../redux/features/PostSlice";
import Spinner from "./Spinner";
const CreatePost = () => {
  const [values, setValues] = useState({ 
    title: "", 
    description: "",
    author: "",
    pdf: "",
    genreIds: [],
    fileId: 0,
    isPublished: true
  });
  const [showBook, setShowBook] = useState(false);
  const { loading, book } = useSelector((state) => ({ ...state.app1 }));
  const { title, description, author, pdf, fileId, genreIds, isPublished } = values;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //handle post function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBook({ values }));
    setValues({ 
        title: "", 
        description: "",
        author: "",
        pdf: "",
        genreIds: [],
        fileId: 0,
        isPublished: true
     });
    setShowBook(true);
  };

  //show created pos function
  const showCreatedBook = () => {
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">{book[0].title}</h5>
              <p className="card-text">{book[0].description}</p>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <div>
      <h1 className="text-center bg-dark text-white p-2">Create Post </h1>
      <form action="">
        <div className="mb-3 mt-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            placeholder="Enter Post Title"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setValues({ ...values, description: e.target.value })}
            placeholder="add post description"
            id="floatingTextarea"
          />
          <label htmlFor="floatingTextarea">add book description</label>
        </div>
        <div className="mt-4 d-flex align-items-end justify-content-end">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Go Home
          </button>
          <button
            className="btn btn-danger ms-4"
            type="submit"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </form>
      <div className="mt-4">{showBook && <div>{showCreatedBook()}</div>}</div>
    </div>
  );
};

export default CreatePost;
