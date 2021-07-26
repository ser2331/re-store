import React from "react";
import BookListItem from "../book-list-item";

const CartPage = (book) => {
    return (
        <div>
           <BookListItem book={book}/>
        </div>
    )
}
export default CartPage