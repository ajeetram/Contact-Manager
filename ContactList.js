import React from 'react';
import { FaTrash } from "react-icons/fa";
import {IoMdContact} from "react-icons/io";

function ContactList(props) {

  return (
    <>
         
         <div className='items'> 
         
            <div className='Imgs'>
              <IoMdContact size={70}></IoMdContact>
            </div>
            <div className='contact'>
                <div className='header'>
                 {props.text.Name}
                </div>
                <div>
                    {props.text.Email}
                </div>
                <div>
                    {props.text.MobN}
            </div>
          </div>
            <div className='trash'>
            <i onClick={()=>{
              props.onSelect(props.Id)
              }}><FaTrash size={30}></FaTrash>
              
            </i>
            </div>
        </div>
     

    
    </>
  )
}

export default ContactList