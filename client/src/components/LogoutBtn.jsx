import React from 'react'

export default function LogoutBtn({fn}) {
  return (
    <button onClick={fn} className='text-red-600 border border-gray-500 w-full rounded-md mt-1'>Logout</button>
  )
}
