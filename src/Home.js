import {useState, useEffect } from 'react';

import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if(!res.ok){
            throw Error("Could not fetch the data for that resource");
          } else {
            return res.json();
          }
        })
        .then(data => {
          console.log(data);
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err.message);
        })
      }, 1000);
    }, []);
    


  return (
    <div className="home">
      { error && <div>{ error } </div>}
      {isLoading && <div>Loading...</div>}
      { blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario" )} title="Mario's Blogs" /> */}
    </div>
  );
}

export default Home;