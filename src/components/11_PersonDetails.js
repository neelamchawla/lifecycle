import React from 'react'

function PersonDetails({person}) {
    return (
        <div>
             <h2>{"User's Name: " + person.firstname + " " + person.lastname} <br/> DOB: {person.year}  <br/> <br/> </h2>
        </div>
    )
}

export default PersonDetails
