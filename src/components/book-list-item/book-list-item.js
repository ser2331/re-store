import React from "react";
import './book-list-item.scss'

const BookListItem = ({book}) => {
    const {title, author} = book
    return (
        <div>
            <span> {title}</span>
            <span> {author}</span>
        </div>
    )
}
export default BookListItem