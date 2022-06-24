import React from 'react'
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

function Modal({show, close, data}) {
  return (
    <>
      <Backdrop show={show} close={close}  />
     <div onClick={(e) => e.stopPropagation()} className={`modalwindow${show ? " on" : ""}`}>
          <div className='modalActions'>
            <p>First name: {data.firstName}</p>
            <p>Last name: {data.lastName}</p>
            <p>Email: {data.email}</p>
            <p>Password: {data.password}</p>
            <p>TextArea: {data.textArea}</p>
            <p>Select: {data.select}</p>
            <p>Radio: {data.radio}</p>
            <p>Checkbox: {data.checkbox ? <span>Agreed</span> : <span>Disagreed</span>}</p>
            {data.firstNameSecond && <p>First name: {data.firstNameSecond}</p>}
            {data.lastNameSecond && <p>Last name: {data.lastNameSecond}</p>}
            {data.emailSecond && <p>Email: {data.emailSecond}</p>}
            {data.passwordSecond && <p>Password: {data.passwordSecond}</p>}
            {data.textAreaSecond && <p>TextArea: {data.textAreaSecond}</p>}
            {data.selectSecond && <p>Select: {data.selectSecond}</p>}
            {data.radioSecond && <p>Radio: {data.radioSecond}</p>}
            {data.checkboxSecond && <p>Checkbox: {data.checkboxSecond ? <span>Agreed</span> : <span>Disagreed</span>}</p>}
          </div>
     </div>
    </>
  );
}

export default Modal
