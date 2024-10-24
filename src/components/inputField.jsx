import React from 'react'

const Input = (props) => {
    const {type, id,name, className} = props
  return (
    <div>
      <input type={type} id={id} name={name} className={`${className} border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-md h-10`}  />
    </div>
  )
}

export default Input
