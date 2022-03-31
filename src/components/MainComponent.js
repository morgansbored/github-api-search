import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import UserInfoCard from "./UserInfoCard";

function Main() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(Object);

  useEffect(() => {
    if (username) {
      getUserData();
    }
  }, [username]);

  var gitHubUrl = `https://api.github.com/users/${username}`;

  const getUserData = async () => {
    const response = await fetch(gitHubUrl, {
      method: "GET",
      headers: {
        Authorization: `token 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 `,
      },
    });
    const jsonData = await response.json();
    if (jsonData && jsonData.message !== "Not Found") {
      setUserData(jsonData);
    } else if (username !== "") {
      console.log("Username does not exist");
    } else {
      setUserData({});
    }
  };

  return (
    <div>
      <SearchBar username={username} setUsername={setUsername} />
      <UserInfoCard userData={userData} />
    </div>
  );
}

export default Main;
