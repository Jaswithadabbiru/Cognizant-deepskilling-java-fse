import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

import { books, blogs, courses } from "./Data";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (

    <div className="container">

      {showCourses && (
        <div className="column">
          <CourseDetails courses={courses} />
        </div>
      )}

      {showBooks && (
        <div className="column">
          <BookDetails books={books} />
        </div>
      )}

      {showBlogs && (
        <div className="column">
          <BlogDetails blogs={blogs} />
        </div>
      )}

    </div>

  );

}

export default App;