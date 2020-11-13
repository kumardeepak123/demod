import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const baseListItem = (props) => {
    return (
        <div style={{width:"100%", height:"90px" , marginTop:"5px" , marginBottom:"5px", borderRadius:"5px" ,backgroundColor:"#EAF0F1" , display:"flex"}}>
         <div><LocationOnIcon color="primary" fontSize="large" /></div>
         <div><h2>hii</h2></div>
        </div>
      );
}
 
export default baseListItem;