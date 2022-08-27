import React, { useId } from 'react'

export default function Home() {

    const id = useId()

  return (

    <>
        <label htmlFor={`${id}-name`}>Name</label>
        <input type="text" id={`${id}-name`}></input>
        <label htmlFor={`${id}-age`}>Age</label>
        <input type="text" id={`${id}-age`}></input>
    </>
  )
}
