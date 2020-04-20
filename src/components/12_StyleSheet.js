// ============ Normal way ==============
// import React from 'react'
// import './12_StyleSheet.css'

// function StyleSheet () {
//   return (
//     <>
//       <h2 className="primary">Styling</h2>
//     </>
//   )
// }

// export default StyleSheet


// ============ Using props ==============


// import React from 'react'
// import './12_StyleSheet.css'

// function StyleSheet (props) {
//     let StyleProps = props.primary ? 'primary' : 'info'
//   return (
//     <>
//       <h2 className={StyleProps}>Styling</h2>
//     </>
//   )
// }

// export default StyleSheet


// ============ Using multiple classes ==============


// import React from 'react'
// import './12_StyleSheet.css'

// function StyleSheet (props) {
//     let StyleProps = props.primary ? 'primary' : 'info'
//   return (
//     <>
//       <h2 className={`${StyleProps} font-xl`}>Styling</h2>
//     </>
//   )
// }

// export default StyleSheet


// ============ Using Inline styling ==============


// import React from 'react'
// import './12_StyleSheet.css'

// const heading = {
//     fontSize: '70px',
//     color: 'red'
// }

// function StyleSheet () {
//   return (
//     <>
//       <h2 style={heading}>Styling</h2>
//     </>
//   )
// }

// export default StyleSheet


// ============ Using module styling ==============


import React from 'react'
import './12_StyleSheet.css'
import styles from './StyleSheet_12.module.css'

function StyleSheet () {
  return (
    <>
      <h2 className='error'>Error</h2>
      {/* Regular style sheet */}
      <h2 className={styles.success}>Success</h2>
      {/* Module style sheet */}
    </>
  )
}

export default StyleSheet