import { useState, useEffect } from 'react';

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());
};

export default function Api() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data.slice(0, 5)); // Show first 5 posts
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>API Posts</h2>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
