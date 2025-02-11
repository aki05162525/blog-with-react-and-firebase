import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      console.log(data);
      console.log(data.docs);
      console.log(data.docs.map((doc) => ({ doc })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  return (
    <div className="homepage">
      <div className="postContents">
        <div className="poseHeader">
          <h1>タイトル</h1>
        </div>

        <div className="postTextContainer">
          今はReactの学習中です。これから頑張ってReactエンジニアとしてヵつやくしていきたいと思っています。よろしくお願いします。
        </div>
        <div className="nameAndDeleteButton">
          <h3>@akihiro</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
