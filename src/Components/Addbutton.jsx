import React from 'react';
function AddTransactionButton(){
    return(
        <>
        <div style={{
            display: 'flex',
            justifycontent: 'center',
            textAlign: 'center',
            paddingLeft:'15cm',
            height:'2cm',
            width:'2cm',
            fontSize:'30px'

        }}>
        <button className ="addbtn" onClick="refresh">Add Transaction</button>
        </div>
        </>
      //object.onClick = function(){refresh}
      //object.addEventListener("click", refresh)
        
       
    )
       }
    
export default AddTransactionButton;