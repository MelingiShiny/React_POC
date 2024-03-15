import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../Styles/MyBooks.module.css'

export const MyBooks = () => {
    const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleted, setDeleted] = useState(false)
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('myBooks');
        return savedItems ? JSON.parse(savedItems) : [];
    });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    function getRandomColor() {
        const randomChannel = () => Math.floor(Math.random() * 100 + 155); // Generate values between 155-255
        const r = randomChannel();
        const g = randomChannel();
        const b = randomChannel();
        return `rgb(${r}, ${g}, ${b})`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundColor(getRandomColor());
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const openModal = () =>  setModalIsOpen(true);
    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedItemIndex(null);
    };

    const openDeletedModal = () => {
        
     setDeleted(true);
        setTimeout(() => {
            setDeleted(false);
          }, 1000);
        }
    const closeDeletedModal = ()=>{
        setDeleted(false);
    }

    const handleAddItem = () => {
        const newItem = { title, description };
        setItems([...items, newItem]);
        saveItemsToLocalStorage([...items, newItem]);
        closeModal();
        setTitle('');
        setDescription('');
    };

    const handleEditItem = (index) => {
        setSelectedItemIndex(index);
        const selectedItem = items[index];
        setTitle(selectedItem.title);
        setDescription(selectedItem.description);
        openModal();
    };

    const handleDeleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        saveItemsToLocalStorage(updatedItems);
        openDeletedModal();
    };

    const handleSubmitEdit = () => {
        const updatedItems = [...items];
        updatedItems[selectedItemIndex] = { title, description };
        setItems(updatedItems);
        saveItemsToLocalStorage(updatedItems);
        setTitle('');
        setDescription('');
        closeModal();
    };

    const saveItemsToLocalStorage = (items) => {
        localStorage.setItem('myBooks', JSON.stringify(items));
    };

    return (
        <div style={{ backgroundColor: '#e5e7e9', minHeight: '100vh', display: 'flex' ,flexDirection:'column', alignItems: 'flex-start' }}>
            <div>
                <button className={styles.addButton} onClick={openModal}>Add book</button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Item Modal"
                overlayClassName={styles.overlay}
                appElement={document.getElementById('root')}
                style={{
                    
          content: {
            width: '40%',
            height: '35%',
            margin: 'auto',
          }
        }
                }

            >
                <h2>{selectedItemIndex !== null ? 'Edit Item' : 'Add Item'}</h2>
                <div style={{ marginBottom: '10px' }}>
                    <label className={styles.label}>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label className={styles.label}>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    {selectedItemIndex !== null ? (
                        <button onClick={handleSubmitEdit} className={styles.submitButton}>Save Changes</button>
                    ) : (
                        <button onClick={handleAddItem} className={styles.submitButton}>Submit</button>
                    )}
                    <button onClick={closeModal} className={styles.closeButton}>Cancel</button>
                </div>
            </Modal>

            <div style={{display:'flex'}}>
                {items.map((item, index) => (
                    <div key={index} style={{ backgroundColor}} className={styles.newBook}>
                        <div  className={styles.fontButtons}>
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
                ))}
            </div>

            <Modal
                isOpen={deleted}
                onRequestClose={closeDeletedModal}
                contentLabel="Add Item Modal"
                overlayClassName={styles.overlay}
                appElement={document.getElementById('root')}
                style={{
                    
          content: {
            width: '25%',
            height: '13%',
            display: 'flex',
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
                }

            >
                <h2>Deleted successfully</h2>
            </Modal>
        </div>
    );
};
