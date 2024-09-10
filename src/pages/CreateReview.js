import React, { useState } from 'react';
import ReviewService from '../services/ReviewService';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/CreateReview.css';

const CreateReview = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ReviewService.createReview(title, content, rating);
                alert('Отзыв успешно создан!');
                navigate(`/reviews/${encodeURIComponent(title)}`);
        } catch (error) {
            console.error('Ошибка при создании отзыва:', error);
        }
    };

    return (
        <div>
            <h1>Создать отзыв для книги: {decodeURIComponent(title)}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="comment">Комментарий:</label>
                    <textarea
                        id="comment"
                        className="review-textarea"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Рейтинг:</label>
                    <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rate) => (
                            <option key={rate} value={rate}>{rate}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Создать отзыв</button>
            </form>
        </div>
    );
};

export default CreateReview;