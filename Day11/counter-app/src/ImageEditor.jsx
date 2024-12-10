import img from "./Images/shinchan.webp";
import {useState } from 'react';
import "./App.css";
 const ImageEditor = () => {
    const [width, setWidth]= useState(200);
    const [height, setHeight]= useState(200);
  return (
    <div>
        <img id="pic" src={img} style={{ width: `${width}px` , height: `${height}px`}}/>
        <br></br>
        <button
            onClick={() => {
                setWidth(width+10);
            }}
            >
                Increase Width
            </button>
            <button
            onClick={() => {
                setHeight(height+10);
            }}
            >
                Increase Height
            </button>
            <button
            onClick={() => {
                setWidth(width-10);
            }}
            >
                Decrease Width
            </button>
            <button
            onClick={() => {
                setHeight(height-10);
            }}
            >
                Decrease Height
            </button>

    </div>
  )
}
export default ImageEditor;
