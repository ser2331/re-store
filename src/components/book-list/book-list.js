import React, {Component} from "react";
import {connect} from "react-redux";
import './book-list.scss'

import BookListItem from "../book-list-item";
import {withBookstoreService} from '../hoc'
import {booksLoaded} from '../../actions'

class BookList extends Component {
    componentDidMount() {
        const {bookstoreService} = this.props
        const data = bookstoreService.getAllBooks()
        this.props.booksLoaded(data)

    }

    render() {
        const {books} = this.props
        return (
            <ul className='book-list'>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => {
    return {books}
}
const mapDispatchToProps = {
    booksLoaded
}
export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(
        BookList))