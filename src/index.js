import React from "react";
import ReactDOM from 'react-dom'
import App from "./components/app";
import {BrowserRouter as Router} from 'react-router-dom'
import BookstoreService from "./services/bookstore-service";
import {Provider} from "react-redux";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import store from "./store";
import {BookstoreServiceProvider} from "./components/bookstore-service-context";

const bookstoreService = new BookstoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'))

