import React from 'react'
function Table(){
    return(
    <table border="1" style={{
        width:'100%',
        height:'70vh',
        margin:'0',
        overflowX:'hidden'
        
    }}>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>category</th>
            <th>Amount</th>
        </tr>
        <tr>
            <td>2019-12-01</td>
            <td>Paycheck from Bob's Burgers</td>
            <td>Income</td>
            <td>1000</td>
        </tr>
        <tr>
            <td>2019-12-01</td>
            <td>South by SouthWest Quinoa Bowl at Fresh & Co</td>
            <td>Food</td>
            <td>-10.55</td>
        </tr>
        <tr>
            <td>2019-12-02</td>
            <td>South by SouthWest Quinoa Bowl at Fresh & Co</td>
            <td>Food</td>
            <td>-10.55</td>
        </tr>
        <tr>
            <td>2019-12-04</td>
            <td>Sunglasses, Urban outfitters</td>
            <td>Fashion</td>
            <td>-24.99</td>
        </tr>
        <tr>
            <td>2019-12-06</td>
            <td>Verimo, Alice pays you for burrito</td>
            <td>Food</td>
            <td>8.75</td>
        </tr>
        <tr>
            <td>2019-12-06</td>
            <td>Chipotle</td>
            <td>Food</td>
            <td>-17.59</td>
        </tr>
        
        </table>
    )
} 
export default Table;