import React from 'react'
function Form(){
    return(
        <div >
        <form action="bankOfFlatiron" method ="POST" className = "form1" style={{
            float:'left',
            margin:'auto',
            padding:'40px',
            display:'inline-flex',
            
            

        }}>
           Date:<label for ="Date"></label>
           <input type ="date" placeholder='Date'/>
            <br></br>
            <label for = "Description" style={{
                paddingLeft:'4cm',
                paddingRight:'4cm',
               maxWidth:'8cm'
            }}></label>
            <input type ="text" placeholder='Description'/>

            <br></br>
            
            <label for = "Category" style={{
                paddingLeft:'4cm',
                paddingRight:'4cm'

            }}></label>
            <input type ="text" placeholder='Category'/>
            <br></br>
            <label for = "Amount" style={{
                paddingLeft:'4cm',
                paddingRight:'4cm'

            }}></label>
            <input type ="number" placeholder='Amount'/>
        </form>
        </div>
    )
}
export default Form;