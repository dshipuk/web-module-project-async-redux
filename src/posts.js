import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./state/actions";
import styled from "styled-components";

const StyledIpNum = styled.h3`
color: black;
text-decoration: underline;
text-align: center;

`

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className="ipWrapper">
        <h3>Your Ip Address</h3>
      <StyledIpNum className="ipNum">{posts.ip}</StyledIpNum>
    </div>
  );
};

export default Posts;
