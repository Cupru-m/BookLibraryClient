const API_BASE_URL = 'http://localhost:8080';
class BookService {
    async getAllBooks() {
        const response = await fetch(`${API_BASE_URL}/books/GetAll`);
        if (!response.ok) {
            throw new Error('Ошибка при получении списка книг');
        }
        return await response.json();
    }

    async getBookById(id) {
        const response = await fetch(`${API_BASE_URL}/books/${id}`);
        if (!response.ok) {
            throw new Error('Книга не найдена');
        }
        return await response.json();
    }
    async getBookByTitle(title) {
        const response = await fetch(`${API_BASE_URL}/book/${encodeURIComponent(title)}`);
        if (!response.ok) {
            throw new Error('Книга не найдена');
        }
        return await response.json();
    }
    async saveBook(bookData) {
        const response = await fetch(`${API_BASE_URL}/saveBook`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });
        if (!response.ok) {
            throw new Error('Ошибка при сохранении книги');
        }
        return await response.json();
    }

    async updateBook(id, bookData) {
        const params = new URLSearchParams();

        // Append each property if it exists
        if (bookData.title) params.append('title', bookData.title);
        if (bookData.genre) params.append('genre', bookData.genre);
        if (bookData.year) params.append('year', bookData.year);
        if (bookData.author) params.append('author', bookData.author);

        const response = await fetch(`${API_BASE_URL}/updateBook/${id}?${params.toString()}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Ошибка при обновлении книги');
        }
        return await response.json();
    }

    async deleteBook(id) {
        const response = await fetch(`${API_BASE_URL}/deleteBook/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Ошибка при удалении книги');
        }
    }

    async getBooksWithHighRating(minRating) {
        const response = await fetch(`${API_BASE_URL}/books/high-rating?minRating=${minRating}`);
        if (!response.ok) {
            throw new Error('Ошибка при получении книг с высоким рейтингом');
        }
        return await response.json();
    }

    // Методы для работы с счетчиком
    async getCounterData() {
        const response = await fetch(`${API_BASE_URL}/counter/data`);
        if (!response.ok) {
            throw new Error('Ошибка при получении данных счетчика');
        }
        return await response.json();
    }
}
export default new BookService();