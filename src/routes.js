// src/routes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BooksList from './pages/BooksList';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';
import DeleteBook from './pages/DeleteBook';
import FindBook from './pages/FindBook';
import Reviews from './pages/Reviews';
import CreateReview from './pages/CreateReview'; // Import CreateReview

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/find" element={<FindBook />} />
        <Route path="/update/:id" element={<UpdateBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
        <Route path="/reviews/:title" element={<Reviews />} />
        <Route path="/createReview/:title" element={<CreateReview />} /> {/* Add CreateReview route */}
    </Routes>
);

export default AppRoutes;