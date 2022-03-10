import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./About.css";

const About = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);

  return (
    <>
      <div className="friend-about">
        <h1 className="main-heading">About of friend {friendId}</h1>
        <h2 className="friend-name">Name: {friend.name}</h2>
        <p>Email: {friend.email}</p>
        <p>Phone: {friend.phone}</p>
        <p>Webste: {friend.website}</p>
        <Link to="/home">
          <button className="regular-btn">Go Home</button>
        </Link>
      </div>
    </>
  );
};
export default About;
