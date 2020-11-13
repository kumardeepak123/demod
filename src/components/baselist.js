import React ,{useState} from 'react';
import BaseListItem  from "../components/baselistItem"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const BaseList = (props) => {
    
    const {locations} = props ;
    const baseItems = locations;
    return (
        <React.Fragment>
        
        <Form.Control type="text" placeholder="Search" className="mr-sm-2"  style={{marginBottom:"10px"}} />
        
        
         <div style={{width:"100%",height:"550px" , borderRadius:"3px" , padding:"10px", overflow:"auto", boxShadow:"0 0px 5px"}}>
        
         {baseItems.map((index ,baseitem)=>{
             return <BaseListItem />
         })}
         </div>
         </React.Fragment>
      );
}
 
export default BaseList;