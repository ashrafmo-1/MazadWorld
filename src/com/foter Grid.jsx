import React from 'react';

const items = [
    'Game', 'iPhone', 'TV', 'Asus Laptops',
    'Macbook', 'SSD', 'Graphics Card',
    'Power Bank', 'Smart TV', 'Speaker',
    'Tablet', 'Microwave', 'Samsung'
];

const Grid = () => {
    return (
        <div className="grid grid-cols-  gap-4 p-6">
            {items.map((item, index) => (
                <button
                    key={index}
                    className="flex items-center justify-center bg-gray-800 text-white py-1 px-1  hover:bg-gray-700 active:bg-gray-600 transition duration-200 font-medium text-sm"
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default Grid;
