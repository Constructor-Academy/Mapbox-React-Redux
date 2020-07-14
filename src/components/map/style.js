import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    background: #fff;
    padding: 10px;
`;

export const IconWhite = styled(FontAwesomeIcon)`
    margin: 0;
    opacity: 0.9;
    padding: 10px;
    font-size: 3em;
    color: white;
    border-radius: 0% 50% 50% 50%;
    border: 2px solid #fff;
    background: ${(props) => props.type === "propulsion" ? "#EE495C" : "green" };
`;

export const Icons = styled(FontAwesomeIcon)`
    margin: 0;
    width: 30px;
    height: 30px;
    opacity: 1;
    color: ${(props) => props.source === "propulsion" ? "#EE495C" : "green" };
`;