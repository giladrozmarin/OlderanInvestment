 import {getImages} from '../utils/img'
 import React, { useState, useEffect } from 'react'
export default function ImgView() {
 

    const [img,setImg] = useState([])

    useEffect(() => {
     getImages().then(res=> {
         
        setImg(res)
    }
     )},[])

    return (
        <>
    <h1>10 random picture</h1>
  <ul>
      {
        img.map(v =>{
              return <img src={v.url} alt={v.url}/>
            })
      }
      </ul>
</>
    )
}