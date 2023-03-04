import React from 'react'

const Book = (props) => {
  return (
    <div className='card'>
      <input onChange={props.change} type="text" value={props.bookName} />
      <h1>{props.bookName}</h1>
      <h3>{props.writer}</h3>
    </div>
  )
}

export default Book;
