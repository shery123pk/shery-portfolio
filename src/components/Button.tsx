import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
     <button className='bg-[#f4c89c] p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[20px] font-bold hover:bg-[#f4c89c]'>{props.textName}</button>

    </>
  )
}

export default Button