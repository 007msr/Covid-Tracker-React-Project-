import React,{ useEffect,useState} from 'react'


const Table = ({countries}) => {
    return (
        <div className="table">
           {countries.map((country) =>(
            <tr>
                <td>{country.country}</td>
                <td>{country.cases}</td>
            </tr>

           ))}
           

        </div>
    )
}

export default Table
