import React from 'react'
import "./navbar.css";
import styled from "styled-components";
const Ul=styled.ul`

list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;
 @media only screen and (max-width: 600px) {
    top:60px;
      padding:10px;
      flex-flow: column nowrap;
      text-align: center;
      position: fixed;
      right: 0;
      background-image: linear-gradient(to right top, #c4fcef, #a8efef, #90e1f0, #7fd2f1, #7ac1f0, #75c0f3, #6fc0f5, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
      width:200px;
      transform: ${({hamburger})=>hamburger?'translateX(0)':'translateX(100%)'};
    
 }
 @media only screen and (max-width: 760px) {
    top:60px;
      padding:10px;
      flex-flow: column nowrap;
      text-align: center;
      position: fixed;
      right: 0;
      background-image: linear-gradient(to right top, #c4fcef, #a8efef, #90e1f0, #7fd2f1, #7ac1f0, #75c0f3, #6fc0f5, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
      width:200px;
      transform: ${({hamburger})=>hamburger?'translateX(0)':'translateX(100%)'};
    
 }`;
function RightNav({hamburger}) {
  return (
    <>
      <Ul hamburger={hamburger}>
                
                <li>
                    <button><a href="#">ABOUT</a></button>
                </li>
                <li>
                    <button><a href="#">CONTACT</a></button>
                </li>
                <li>
                    <button><a href="#">HELP</a></button>
                </li>
                <li>
                    <button><a href="#">SOCIALS</a></button>
                </li>
            
            </Ul>
    </>
  )
}

export default RightNav;
