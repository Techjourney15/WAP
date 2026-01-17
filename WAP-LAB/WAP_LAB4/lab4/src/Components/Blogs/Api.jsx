// src/Components/Blogs/Api.jsx
const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());
};

export default fetchPosts;
