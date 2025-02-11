import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

function Navbar({ isAuth }) {
  return (
    <nav>
      <Link to="/" className="nav-link">
        <FontAwesomeIcon icon={faHouse} /> ホーム
      </Link>

      {!isAuth ? (
        <Link to="/login" className="nav-link">
          <FontAwesomeIcon icon={faArrowRightToBracket} /> ログイン
        </Link>
      ) : (
        <>
          <Link to="/createPost" className="nav-link">
            <FontAwesomeIcon icon={faFilePen} /> 記事投稿
          </Link>
          <Link to="/logout" className="nav-link">
            <FontAwesomeIcon icon={faArrowRightToBracket} /> ログアウト
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
