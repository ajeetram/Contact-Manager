import React,{useState} from 'react'
import './List.css'
import ContactList from './ContactList'
function List() {

const[list, setList]= useState({
    Name:"",
    Email:"",
    MobN:""

})

const [contact, setContact] = useState([]);

const Addcontact=(e)=>
{
    e.preventDefault();

    const newData  = {...list, id:new Date().getTime().toString()}

    setContact([...contact, newData])
    
    setList({Name:"", Email:"",MobN:""})
}

const handler=(e)=>
{
    const name = e.target.name;
    const value = e.target.value;

    setList({...list,[name]:value});

}
const Delete = (Id)=>
{
   setContact((oldList)=>
   {
    return oldList.filter((arrEle,index)=>
    {
      return index!==Id
    })
    
   }) 
}



  return (
    <>
        <div className='uiMain'>
         <h2>Add Contact</h2>
         <form className='uiForm' onSubmit={Addcontact}>
            <div className='field'>
                <label>Name</label>

                <input type='text' name='Name' placeholder='Name' onChange={handler} value={list.Name}></input>
            </div>
            <div className='field'>
                <label>Email</label> 
                <input type='text' name='Email' placeholder='Email' onChange={handler} value={list.Email}></input>
            </div>
            <div className='field'>
                <label>Mobile Number</label>
                <input type='number' name='MobN' placeholder='MobN' onChange={handler} value={list.MobN}></input>
            </div>
            <div>
      
              <button className='uiButton'>Add</button>
            </div> 
         </form>
      </div>
      <div className='ContactListHeader'>Contact List</div>
      {contact.map((data,index)=>
      {
        return(
          <>
            <ContactList text={data} key={index} Id={index} onSelect={Delete}></ContactList>
            
            </>
        )

      })}
    </>
  )
}

export default List