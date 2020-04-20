// import React from 'react'

// function NameList() {
//     const names = ['John', 'Emily', 'Joe']
//     return (
//         <div>
//             <h2>{names[0]}</h2>
//             <h2>{names[1]}</h2>
//             <h2>{names[2]}</h2>
//         </div>
//     )
// }

// export default NameList

// ======================================

// import React from 'react'

// function NameList() {
//     const names = ['John', 'Emily', 'Joe']
//     return (
//         <div>
//             {
//                 names.map((name) => <h2>{"User's Name: " + name}</h2>)
//             }
//         </div>
//     )
// }

// export default NameList


// ======================================


import React from 'react'

function NameList() {
    const names = ['John', 'Emily', 'Joe'];
const nameList = names.map((name, index) => <h2 key={index}>{index} {"User's Name: " + name}</h2>)
    return <div>{nameList}</div>
}

export default NameList


// ======================================


// import React from 'react'
// import PersonDetails from './4PersonDetails';

// function NameList() {
//     const names = [
//         {
//         id: 'a',
//         firstname: 'Robin',
//         lastname: 'Wieruch',
//         year: '15-03-1988',
//       },
//       {
//         id: 'b',
//         firstname: 'Dave',
//         lastname: 'Davidds',
//         year: '10-05-1998',
//       },
//       {
//         id: 'c',
//         firstname: 'John',
//         lastname: 'Doe',
//         year: '10-05-1996',
//       },
//       {
//         id: 'd',
//         firstname: 'Ross',
//         lastname: 'Galler',
//         year: '10-05-1992',
//       },
//       {
//         id: 'e',
//         firstname: 'Joe',
//         lastname: 'Dav',
//         year: '10-05-1991',
//       }
//     ];
//     const nameList = names.map((person) => 
//     <PersonDetails key={person.id} person = {person} />
//     )
//     return <div>{nameList}</div>
// }

// export default NameList
