import {Component} from 'react'

import _bookImage from './book.jpg'

export default class BookstoreService extends Component {
    _books=[
        {
            id:1,
            title:'Анна Каренина',
            author:'Лев Толстой',
            price: 25,
            coverImage:_bookImage
        },
        {
            id:2,
            title:'Автостопом по галактике',
            author:'Дуглас Адамс',
            price: 45,
            coverImage:_bookImage
        },
        {
            id:3,
            title:'Американский психопат',
            author:'Брет Истон Эллис',
            price: 62,
            coverImage:_bookImage
        }
    ]
    getAllBooks=()=>{
        return this._books
    }
    getBook=async ()=>{
        return this._books[0]
    }
    getBookImage=()=>{
        return _bookImage
    }
}