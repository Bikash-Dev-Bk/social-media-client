import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  console.log("inside home post", user);

  const [displayPosts, setDisplayPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setDisplayPosts(data));
  }, []);

  const handlePost = (event) => {
    event.preventDefault();
    const caption = event.target.caption.value;
    const userName = user.displayName;
    const userPhoto = user.photoURL;

    const post = {
      caption,
      userName,
      userPhoto,
    };
    console.log(caption);
    event.target.reset();

    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newPost = [...posts, post];

        setPosts(newPost);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="my-12">
        <form
          onSubmit={handlePost}
          className="flex justify-center items-center"
        >
          <textarea
            className="textarea textarea-bordered"
            name="caption"
            id="caption"
            cols="100"
            rows="4"
            placeholder="Add a post"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary ml-10">
            Post
          </button>
        </form>
      </div>

      {displayPosts.map((displayPost) => (
        <div
          key={displayPost._id}
          displayPost={displayPost}
          className="flex justify-center items-center my-10"
        >
          <div className="card w-2/3 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{displayPost.userName}</h2>
              <p>{displayPost.caption}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-info">Details</button>
              </div>
              <div className="">
                <div className="form-control">
                  <input
                    name="comment"
                    type="text"
                    placeholder="Write a comment"
                    className="input w-full input-bordered"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
