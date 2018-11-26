import React from "react";
import { Link } from "react-router-dom";

const GuestBar = props => {
  return (
    <div className="guestbar">
      <ul>
        <Link to="/register">
          <li>회원가입</li>
        </Link>
        <Link to="/login">
          <li>로그인</li>
        </Link>
      </ul>
    </div>
  );
};
export default GuestBar;
