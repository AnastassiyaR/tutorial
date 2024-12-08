import React, { useState } from 'react';
// Импортируем React и хук useState: Эта строка импортирует библиотеку React и хук useState, который позволяет нам добавлять состояние в функциональные компоненты.

function FruitSelector() {
    // Состояние для хранения выбранных фруктов
    const [selectedFruits, setSelectedFruits] = useState([]);
// Мы используем хук useState, чтобы создать состояние selectedFruits, которое изначально является пустым массивом
    // setSelectedFruits — это функция, которую мы будем использовать для обновления этого состояния.

    // Функция для обработки изменения выбора фрукта
    const handleFruitChange = (fruit) => {
        setSelectedFruits(currentSelectedFruits => {
            // Мы вызываем функцию setSelectedFruits, передавая ей функцию, которая принимает предыдущее состояние currentSelectedFruits
// currentSelectedFruits: Это аргумент функции, который содержит предыдущее состояние selectedFruits перед обновлением
            // Проверяем, выбран ли фрукт
            if (currentSelectedFruits.includes(fruit)) {
                // Если выбран, удаляем его из списка
                return currentSelectedFruits.filter(f => f !== fruit);
            } else {
                // Если не выбран, добавляем его в список
                return [...currentSelectedFruits, fruit];
                // Это создает новый массив, который включает все фрукты из currentSelectedFruits и добавляет к нему новый фрукт.
            }
        });
    };

    return (
        <div>
            <h3>Выберите фрукты:</h3>
            <button onClick={() => handleFruitChange('Яблоко')}>Яблоко</button>
            <button onClick={() => handleFruitChange('Банан')}>Банан</button>
            <button onClick={() => handleFruitChange('Апельсин')}>Апельсин</button>

            <h4>Выбранные фрукты:</h4>
            <ul>
                {selectedFruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default FruitSelector;