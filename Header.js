import React from 'react'
import {RiContactsBookFill} from 'react-icons/ri'
function Header() {
  return (
    <div className="UiFixedMenu">
    <div className='uiContainerCenter'>
    <h1>Contact Manager <RiContactsBookFill size={40} className="logo"></RiContactsBookFill>
    </h1>
    
    </div>
    </div>
  )
}

export default Header;