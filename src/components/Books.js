import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import {Container, Row, Col} from 'react-bootstrap';

import { fetchBooks } from "./../redux/features/BookSlice";
import MyCard from "./MyCard";
import MyNavBar from "./MyNavBar";


const Books = () => {
    const dispatch = useDispatch();

    const { loading, books, description, edit } = useSelector((state) => ({
        ...state.app1,
    }));

    const handleFetchData = (e) => {
        // e.preventDefault();
        dispatch(fetchBooks());
      };

    useEffect(() => {
        handleFetchData()
    }, [])

    return (
        <>
            <Container fluid className="p-0">
                <MyNavBar />
            </Container>
            <Container className="mt-5">
                <Row className="g-3">
                    {
                        books.length> 0 && books.map((book) => (
                            <MyCard book={book}/>
                        ))
                    }
                </Row>
            </Container>
        </>
    )

}

export default Books