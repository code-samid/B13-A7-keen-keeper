import { useEffect, useState } from "react";

export default function useFriends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("/friends.json")
        .then(res => res.json())
        .then(data => setFriends(data));
    }, 1500); // simulate loading
  }, []);

  return { friends };
}