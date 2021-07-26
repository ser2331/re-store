import React, {Component} from "react";
import './book-list.scss'
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
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
            <ul>
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
const mapDispatchToProps = (dispatch) => {
    return {
        booksLoaded: (newBooks) => {
            dispatch(booksLoaded(newBooks))
        }
    }
}
export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(
        BookList))