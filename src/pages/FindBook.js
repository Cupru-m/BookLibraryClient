import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';

const FindBook = () => {
    const [title, setTitle] = useState('');
    const [bookInfo, setBookInfo] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Использование хука для навигации

    const handleSearch = async () => {
        setError('');
        setBookInfo(null);
        try {
            const book = await BookService.getBookByTitle(title);
            setBookInfo(book);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleUpdate = () => {
        if (!bookInfo) {
            setError('Сначала найдите книгу для обновления.');
            return;
        }
        // Переход на страницу обновления с ID книги
        navigate(`/update/${bookInfo.id}`);
    };

    const handleDelete = () => {
        if (!bookInfo) {
            setError('Сначала найдите книгу для удаления.');
            return;
        }
        // Переход на страницу удаления с ID книги
        navigate(`/delete/${bookInfo.id}`);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Найти книгу</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Введите название книги"
                style={{ marginRight: '10px' }}
            />
            <button onClick={handleSearch}>Поиск</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {bookInfo && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Информация о книге:</h2>
                    <p><strong>ID:</strong> {bookInfo.id}</p>
                    <p><strong>Название:</strong> {bookInfo.title}</p>
                    <p><strong>Жанр:</strong> {bookInfo.genre}</p>
                    <p><strong>Год:</strong> {bookInfo.year}</p>
                    <p><strong>Автор:</strong> {bookInfo.author}</p>
                    <p><strong>Рейтинг:</strong> {bookInfo.rating}</p>
                    <button onClick={handleUpdate} style={{ marginRight: '10px' }}>Обновить</button>
                    <button onClick={handleDelete}>Удалить</button>
                </div>
            )}
        </div>
    );
};

export default FindBook;