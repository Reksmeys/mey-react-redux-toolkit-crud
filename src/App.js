import { Routes, Route } from "react-router-dom";
// import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import Books from "./components/Books";
import ReadBook from "./components/Read";
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/createpost" element={<Books />} />
          <Route path="/read/:id" element={<ReadBook />} />
        </Routes>
    </>
  );
}

export default App;
