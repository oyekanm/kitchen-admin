import React from 'react'

type Props = {
    text : string
}

function Delete({text}: Props) {
  return (
    <span className="flex items-center bg-red-300 text-red-700 capitalize shadow p-3 px-12 text-[1.8rem]">
    {text}
    
  </span>
  )
}

export default Delete