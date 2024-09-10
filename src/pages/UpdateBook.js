import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookService from '../services/BookService';

const UpdateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [formData, setFormData] = useState({ title: '', genre: '', year: '', author: '' });

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const fetchedBook = await BookService.getBookById(id);
                setBook(fetchedBook);
                setFormData({
                    title: fetchedBook.title,
                    genre: fetchedBook.genre,
                    year: fetchedBook.year,
                    author: fetchedBook.author,
                });
            } catch (error) {
                console.error('Ошибка при получении книги:', error);
            }
        };
        fetchBook();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await BookService.updateBook(id, formData);
            alert('Книга успешно обновлена!');
            navigate('/');
        } catch (error) {
            console.error('Ошибка при обновлении книги:', error);
        }
    };

    if (!book) return <p>Загрузка...</p>;

    return (
        <form onSubmit={handleUpdate}>
            <h1>Обновить книгу</h1>
            <input
                type="text"
                placeholder="Название"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Жанр"
                value={formData.genre}
                onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Год"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Автор"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                required
            />
            <button type="submit">Обновить книгу</button>
        </form>
    );
};

export default UpdateBook;