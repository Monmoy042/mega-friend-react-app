import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, email, id } = props.friend;

  //   Style for Friend Component
  const friendStyle = {
    color: "blue",
    border: "2px solid goldenrod",
    marginBottom: "5px",
  };

  const history = useNavigate();

  // Click Handler
  const handleClick = (friendId) => {
    history(`/about/${friendId}`);
  };
  return (
    <>
      <div style={friendStyle}>
        <h1>Name: {name}</h1>
        <p>Email: {email}</p>
        <p>
          <Link to={`/about/${id}`}>
            <button className="regular-btn">Show Details</button>
          </Link>
          <br />

          <button className="regular-btn" onClick={() => handleClick(id)}>
            See Details
          </button>
        </p>
      </div>
    </>
  );
};

export default Friend;
