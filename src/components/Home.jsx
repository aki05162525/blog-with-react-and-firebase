import React from "react";
import "./Home.css";

function Home() {
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
}

export default Home;
