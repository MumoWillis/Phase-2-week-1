 import React from 'react'

 function Search(props){
    return(
 <div className ="search">
    <input type = "text" placeholder ="search your recent transactions" style={{
      width: '100vw', height:'40px', marginLeft:'3px', borderRadius:'2px', marginRight:'3px',overflowX:'hidden'
    }}/>
    
</div>
)}
export default Search;