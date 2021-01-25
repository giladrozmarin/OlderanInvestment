import { getImages } from "../utils/img";
import React, { useState, useEffect } from "react";
import UserList from "../components/UserList";
export default function ImgView() {
  const [img, setImg] = useState([]);

  useEffect(() => {
    getImages().then((res) => {
      setImg(res);
    });
  }, []);

  return (
    <>
      <h1>10 random picture</h1>
      <ul>
        {img.map((v) => {
          return (
            <img key={v.id} src={v.url} alt={v.url} width="300" height="200" />
          );
        })}
      </ul>
  
      {(sessionStorage["role"]) === "ADMIN" ?  <UserList/> : null}
    </>

  
  );
}
