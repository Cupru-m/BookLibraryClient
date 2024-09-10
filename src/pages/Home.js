import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>Добро пожаловать в библиотеку книг!</h1>
            <p>Выберите действие, которое хотите выполнить:</p>
            <nav className="tabs">
                <ul>
                    <li>
                        <Link to="/find">Найти книгу</Link>
                    </li>
                    <li>
                        <Link to="/add">Добавить книгу</Link>
                    </li>
                    <li>
                        <Link to="/books">Получить список книг</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;