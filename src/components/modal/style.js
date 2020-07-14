import styled from "styled-components";

export const ItemForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 80%;

    > .childForm {
        margin-bottom: 20px;
        width: 100%;
    }

    textarea {
        border-radius: 5px;
        background-color: rgb(252, 252, 252);
        border: 1px solid grey;
        resize: none;
        padding: 10px;
    }
`;