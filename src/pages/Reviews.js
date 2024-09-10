// src/pages/Reviews.js

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReviewService from '../services/ReviewService';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const bookTitle = queryParams.get('title');
        if (bookTitle) {
            fetchReviews(bookTitle);
        }
    }, [location]);

    const fetchReviews = async (title) => {
        try {
            const fetchedReviews = await ReviewService.getReviews(title);
            setReviews(fetchedReviews);
        } catch (error) {
            console.error('Ошибка при получении отзывов:', error);
        }
    };

    const handleDelete = async (id) => {
        const isDeleted = await ReviewService.deleteReview(id);
        if (isDeleted) {
            setReviews(reviews.filter(review => review.id !== id));
            alert('Отзыв успешно удален!');
        } else {
            alert('Ошибка при удалении отзыва.');
        }
    };

    return (
        <div>
            <h1>Отзывы</h1>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <p>{review.content} - Рейтинг: {review.rating}</p>
                        <button onClick={() => handleDelete(review.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;