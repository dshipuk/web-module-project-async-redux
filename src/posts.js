import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./state/actions";
import styled from "styled-components";
import { keyframes } from "styled-components";

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;

const StyledIpNum = styled.h3`
color: #f35626;
background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-animation: ${hue} 10s infinite linear;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
  sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
font-feature-settings: "kern";
font-size: 48px;
font-weight: 700;
line-height: 48px;
overflow-wrap: break-word;
text-align: center;
text-rendering: optimizelegibility;
-moz-osx-font-smoothing: grayscale;
`;

const StyledText = styled.h3`
 color: green;
`


const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className="ipWrapper">
        <StyledText>Your Ip Address</StyledText>
      <StyledIpNum className="ipNum">{posts.ip}</StyledIpNum>
    </div>
  );
};

export default Posts;
