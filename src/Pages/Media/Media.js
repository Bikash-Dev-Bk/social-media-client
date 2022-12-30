import React, { useEffect, useState } from "react";

const Media = () => {
  const [displayPosts, setDisplayPosts] = useState([]);

  useEffect(() => {
    fetch("https://social-media-server-rouge-theta.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => setDisplayPosts(data));
  }, []);

  return (
    <div>
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

export default Media;
