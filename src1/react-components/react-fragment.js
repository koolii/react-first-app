import React from 'react'

const BasicReactFragment = () => {
  return (
    <React.Fragment>
      <div>
        React.Fragment
      </div>
      <div>
        Basic syntax
      </div>
      <div>
        These html tag are parallel.
      </div>
    </React.Fragment>
  )
}

// i don't know but folowing syntax doesn't support yet.
// const EasyFragment = () => {
//   return (
//     <>
//       <div>
//         React.Fragment
//       </div>
//       <div>
//         Easy usecase
//       </div>
//       <div>
//         These html tag are parallel.
//         You can see on HTML but, you can write without React.Fragment.
//         But this syntax is really fast, so a lot of editors haven't ajusted yet.
//       </div>
//     </>
//   )
// }

// export default { BasicFragment, EasyFragment }
export default BasicReactFragment