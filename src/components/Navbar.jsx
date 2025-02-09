import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">ホーム</Link>
      <Link to="/createPost">記事投稿</Link>
      <Link to="/Login">ログイン</Link>
    </nav>
  );
}

export default Navbar;
