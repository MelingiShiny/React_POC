// Card.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import myBookstyles from '../Styles/MyBooks.module.css';

const Card = ({ item, index, handleEditItem, handleDeleteItem, backgroundColor }) => {
    return (
        <div key={index}className={myBookstyles.newBook}>
            <div className={myBookstyles.fontButtons}>
                <button onClick={() => handleEditItem(index)}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => handleDeleteItem(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
            <h3>Title</h3><span>{item.title}</span>
            <h3>Description</h3><span>{item.description}</span>
        </div>
    );
};

export default Card;
