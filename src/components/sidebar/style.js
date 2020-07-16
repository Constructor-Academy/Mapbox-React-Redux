import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SideButton = styled.button`
  background-color: #EE495C;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  height: 160px;
  width: 30px;
  border: none;
  padding-left: 2px;
  padding-right: 2px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  :hover {
    cursor: pointer;
    color: #EE495C;
    background-color: #fff;
  }
  position: absolute;
  right: ${(props) => props.state ? "20vw" : 0};
  bottom: 30vh;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
    margin: 0;
    width: 30px;
    height: 30px;
    opacity: 1;
`;

export const SideDiv = styled.div`
  height: 80vh;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20vw;
  padding: 20px;
  background-color: rgba(247, 247, 247, 0.9);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: scroll;
`;

export const SearchForm = styled.form`
  width: 90%;

  input {
        width: 70%;
        padding: 2px 10px;
        margin:0;
        border-right:0; 
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
  }

  button {
        width: 30%;
        padding: 2px 10px;
        margin:0;
        border-left:0;
        background-color: #EE495C;
        color: #fff;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
  }

`;

export const ResultTable = styled.table`
    text-align:center;

    .resultCards {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        border-bottom-left-radius: 12px;
        border-top-right-radius: 12px;
        background: lightgray;
        
        > * {
            padding-bottom: 8px;
        }

        :hover {
            background: grey;
            transition:0.5s;
        }
    }
`;