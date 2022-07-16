import React from 'react'
import "./BookCard.css"
import book from '../../assets/book.png'

const BookCard = (props) => {
 const {title,category,author,price,description}=props;
  return (
    <div className='book'>
        <div className="imgContainer">
        <img src={book} alt="book" />
        </div>
        <div className="describtion">
            <p>{title}</p>
        </div>
    </div>
  )
}

export default BookCard