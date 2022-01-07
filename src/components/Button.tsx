import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actionCreators from "../reducers/appReducer";

const ButtonContainer = styled.div`
  all: unset;
  display: block;
  background-color: #f3e192;
  width: 5rem;
  height: 2rem;
  &:hover {
    background-color: #ebc7c7;
    border: none;
  }
  cursor: pointer;
`;

export default function Button() {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(actionCreators.clickButtonAsync());
  };
  return <ButtonContainer onClick={handleButtonClick}>Click 📝</ButtonContainer>;
}
