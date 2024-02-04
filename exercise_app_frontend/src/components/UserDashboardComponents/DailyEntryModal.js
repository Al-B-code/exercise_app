import React, { useState, useEffect } from 'react';
import styles from "../../styles/Modal.css";
import { RiCloseLine } from "react-icons/ri";
import DailyEntryForm from './DailyEntryForm';




const Modal = ({ setIsOpen }) => {
    return ( 
        <>
        <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modal-header">
                        <h5 className="heading">Daily Entry Submission</h5>
                    </div>
                    <button className="close-button" onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }}/>
                    </button>
                    <div className="modal-content">
                        <DailyEntryForm/>
                    </div>
                    {/* <div className="modal-actions">
                        <div className="actions-container">
                        <button className="delete-button" onClick={() => setIsOpen(false)}>
                            Delete
                        </button>
                        <button className="cancel-button" onClick={() => setIsOpen(false)}>
                            Cancel
                        </button>

                        </div>

                    </div> */}

            </div>
        </div>
        </>

     );
}
 
export default Modal;