import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  background-color: rgba(247, 247, 247, 0.8);

  @keyframes buttonAnim {
    from {width: 150px; height: 30px}
    to {width: 170px; height: 40px}
  }

  button {
    background: ${(props) => props.state ? "#fff" : "#EE495C"};
    color: ${(props) => props.state ? "#EE495C" : "#fff"};
    padding: 5px;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);

    transform: scale(1);
    transition: all 1.5s; 

    animation-name: ${(props) => props.state ? "" : "buttonAnim"};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

`;