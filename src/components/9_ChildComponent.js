import React from 'react'

function ChildComponent(props) {
    return (
        <div>
             {/* <button onClick={props.greetHandler}>Greet Parent</button>
                    1 type w/o parameter
             */}
             <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
