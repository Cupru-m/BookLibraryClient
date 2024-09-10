import React, { useState } from 'react';
import BookService from '../services/BookService';

const AddBook = () => {
    const [formData, setFormData] = useState({ title: '', genre: '', year: '', author: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await BookService.saveBook(formData);
            alert('Книга успешно добавлена!');
            setFormData({ title: '', genre: '', year: '', author: '' }); // Очистка формы
        } catch (error) {
            console.error('Ошибка при добавлении книги:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Добавить книгу</h1>
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
            <button type="submit">Добавить книгу</button>
        </form>
    );
};

export default AddBook;