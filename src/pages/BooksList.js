import React, { useEffect, useState } from 'react';
import BookService from '../services/BookService';
import { Link } from 'react-router-dom';

const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const allBooks = await BookService.getAllBooks();
                setBooks(allBooks);
            } catch (error) {
                console.error('Ошибка при получении списка книг:', error);
            }
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h1>Список книг</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>Название:</strong> {book.title} <br />
                        <strong>Автор:</strong> {book.author} <br />
                        <strong>Жанр:</strong> {book.genre} <br />
                        <strong>Год:</strong> {book.year} <br />
                        <Link to={`/update/${book.id}`}>Обновить</Link> |
                        <Link to={`/delete/${book.id}`}>Удалить</Link> |
                        <Link to={`/reviews/${encodeURIComponent(book.title)}`}>Комментарии</Link> |
                        <Link to={`/createReview/${encodeURIComponent(book.title)}`}>Оставить комментарий</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BooksList;