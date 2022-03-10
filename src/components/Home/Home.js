import react, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Home = () => {
  const [friends, setFriends] = useState([]);

  // Load Data
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <>
      <div>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
