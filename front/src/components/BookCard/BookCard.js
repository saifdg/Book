import React from 'react'
import "./BookCard.css"
import book from '../../assets/book.png'

const BookCard = () => {
  return (
    <div className='book'>
        <div className="imgContainer">
        <img src={book} alt="book" />
        </div>
        <div className="describtion">
            <p>The mind of a leader</p>
        </div>
    </div>
  )
}

export default BookCard