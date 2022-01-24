import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [lpost, setlposts] = useState([]);
  useEffect(() => {
    const fetchposts = async () => {
      const request = await fetch(
        "https://twitter-2c840-default-rtdb.firebaseio.com/posts.json"
      );
      const response = await request.json();
      const loadedposts = [];
      for (const key in response) {
        loadedposts.push({
          id: key,
          name: response[key].name,
          email: response[key].email,
          date: response[key].date,
          logo: response[key].logo,
          message: response[key].message,
          like: response[key].like,
          comment: response[key].comment,
          share: response[key].share,
          image: response[key].image,
        });
      }

      setlposts(loadedposts);
    };
    fetchposts();
  }, []);

  return (
    <div>
      {lpost.map((user) => (
        <Post
          key={user.id}
          name={user.name}
          email={user.email}
          like={user.like}
          message={user.message}
          share={user.share}
          comment={user.comment}
          logo={user.logo}
          image={user.image}
          date={user.date}
        />
      ))}
    </div>
  );
};

export default Posts;
