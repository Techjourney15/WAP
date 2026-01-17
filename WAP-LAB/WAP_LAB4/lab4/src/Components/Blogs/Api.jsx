import { useState, useEffect } from 'react';

export default function Api() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 5)));
  }, []);

  return (
    <div>
     
      {posts.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
