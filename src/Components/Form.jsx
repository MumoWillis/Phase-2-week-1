import React from 'react'
function Form(){
    return(
        <div >
        <form action="bankOfFlatiron" method ="POST" className = "form1" style={{
            float:'left',
            margin:'auto',
            padding:'40px',
            display:'inline-flex',
            
            paddingLeft:'5cm'

        }}>
           Date:<label for ="Date"></label>
           <input type ="date" placeholder='Date'/>
            <br></br>
            <label for = "Description"></label>
            <input type ="text" placeholder='Description'/>
            <br></br>
            <label for = "Category"></label>
            <input type ="text" placeholder='Category'/>
            <br></br>
            <label for = "Amount"></label>
            <input type ="text" placeholder='Amount'/>
        </form>
        </div>
    )
}
export default Form;