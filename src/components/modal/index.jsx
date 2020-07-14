import React, {useState} from 'react';
import { useSelector } from "react-redux";
import Modal from "../../helpers/modal";

import {AddBtn, CloseBtn} from "../../style/buttons";
import {ItemForm} from "./style";

const ModalComp = (props) => {

    const [title, setTitle] = useState("");
    const [titlePlaceholder, setTitlePlaceholder] = useState("...");
    const [content, setContent] = useState("");
    const [selectedValue, setSelectedValue] = useState("disabledValue");

    let types = useSelector(state => state.marker.types)

    const checkDatInput = e => {
        e.preventDefault();
        if(title.length <= 0 && !types.includes(selectedValue))
        {
            setTitlePlaceholder("PLEASE ADD A NAME");
            setSelectedValue("disabledValue");
        } else {
            props.handleLocation({title, content, selectedValue});
            setTitle("");
            setContent("");
            setSelectedValue("disabledValue");
            props.modalRef.current.closeModal()
        }
    }

    return (
        <Modal ref={props.modalRef}>
        <h1>Please add more info on that location</h1>
        <CloseBtn onClick={() => props.modalRef.current.closeModal()}>X</CloseBtn>
        <ItemForm onSubmit={checkDatInput} autocomplete="off">
          <label>Location's name</label>
          <input 
            type="text"
            className="childForm"
            placeholder={titlePlaceholder}
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
            />
          <label>Location's description</label>
          <textarea 
            value={content}
            onChange={e => setContent(e.currentTarget.value)}
            className="childForm"
            rows="5"
            ></textarea>
          <label>Location's type</label>
          <select 
            name="" id="" 
            value={selectedValue}
            onChange={e => setSelectedValue(e.currentTarget.value)}
            className="childForm"
            >
            <option value="disabledValue" disabled>...</option>
            {
              types.map((type, index) => {
                return (
                  <option key={index}>{type}</option>
                )
              })
            }
          </select>
          <AddBtn onClick={checkDatInput}>
            Add the new location
          </AddBtn>
        </ItemForm>
      </Modal>
    )
}

export default ModalComp;