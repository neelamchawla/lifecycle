import React from 'react';

 function Memo({name}) {
    console.log("Memo")
  return (
    <>
    {name}
    </>
  );
}

export default React.memo(Memo)