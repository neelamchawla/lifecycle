// ========= extra div tag =========
// import React from 'react';

// export default function Fragments() {
//   return (
//     <div>
//         <h1>Fragment Demo</h1>
//         <p>Pragraph</p>
//     </div>
//   );
// }


// ========= no more extra div tag =========


import React from 'react';
import Table from './15_Table';

export default function Fragments() {
  return (
    <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>Pragraph</p>
        <Table />
    </React.Fragment>
  );
}


// ===== ways of using Fragments ======
// 1.

// <React.Fragment>

// </React.Fragment>

// ---------
// 2.

// <>

// </>

// ----------
// 3.
// import {React, Fragment} from 'react';

// <Fragment>

// </Fragment>