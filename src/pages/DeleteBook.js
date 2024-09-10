import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';

const DeleteBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await BookService.deleteBook(id);
            alert('Книга успешно удалена!');
            navigate('/books'); // Используйте navigate для перенаправления
        } catch (error) {
            console.error('Ошибка при удалении книги:', error);
        }
    };

    return (
        <div>
            <h1>Удалить книгу</h1>
            <p>Вы уверены, что хотите удалить книгу с ID: {id}?</p>
            <button onClick={handleDelete}>Удалить</button>
        </div>
    );
};

export default DeleteBook;