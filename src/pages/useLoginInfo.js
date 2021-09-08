import { useEffect, useState } from "react";

export default function useLoginInfo() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    console.log(isLoggedIn);
    setIsLoggedIn(isLoggedIn === "1" ? "1" : "0");
    setAccessToken(isLoggedIn === "1" ? sessionStorage.getItem("accessToken") : null);
    setUsername(isLoggedIn === "1" ? sessionStorage.getItem("username") : null);
    return isLoggedIn === "1";
  });
}