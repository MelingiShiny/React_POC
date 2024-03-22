import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from '../Styles/MyBooks.module.css';
import ButtonClick from '../Components/ButtonClick.js'
import Card from '../Components/Card.js';
import CustomModal from '../Components/CustomModal.js';

export const MyBooks = () => {
    const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [textChange, setextChange] = useState(false);
    const [deleted, setDeleted] = useState(false)
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('myBooks');
        return savedItems ? JSON.parse(savedItems) : [];
    });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

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

    const openModal = () => {
        setTitleError('')
        setDescriptionError('')
        setModalIsOpen(true);
    }
    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedItemIndex(null);
        setTitle('');
        setDescription('');
    };

    const addBook = () => {
        openModal();
        setextChange(true)
    }

    const openDeletedModal = () => {

        setDeleted(true);
        setTimeout(() => {
            setDeleted(false);
        }, 1000);
    }
    const closeDeletedModal = () => {
        setDeleted(false);
    }

    const handleAddItem = () => {
        handleErrors(title, description)
        if (title !== '' && description !== '') {
            const newItem = { title, description };
            setItems([...items, newItem]);
            saveItemsToLocalStorage([...items, newItem]);
            closeModal();
            setextChange(false)
            setTitle('');
            setDescription('');
        }



    };

    const handleEditItem = (index) => {
        setSelectedItemIndex(index);
        const selectedItem = items[index];
        setTitle(selectedItem.title);
        setDescription(selectedItem.description);
        setextChange(false)
        openModal();
    };

    const handleDeleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        saveItemsToLocalStorage(updatedItems);
        openDeletedModal();
    };

    const handleSubmitEdit = () => {
        handleErrors(title, description)
        if (title !== '' && description !== '') {
            const updatedItems = [...items];
            updatedItems[selectedItemIndex] = { title, description };
            setItems(updatedItems);
            saveItemsToLocalStorage(updatedItems);
            setTitle('');
            setDescription('');
            setextChange(true)
            closeModal();
        }
    };

    const handleErrors = (title, description) => {
        if (title === '') {
            setTitleError('Title is required');
        } else {
            setTitleError('');
        }
        if (description === '') {
            setDescriptionError('Description is required')
        }
        else {
            setDescriptionError('')
        }
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        if (e) {

            setDescription(e.target.value);
        }
        else {
            setDescription('');
        }
    };

    const saveItemsToLocalStorage = (items) => {
        localStorage.setItem('myBooks', JSON.stringify(items));
    };

    return (
        <div style={{ backgroundColor: '#e8f9f7', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div>
                <ButtonClick text="Add Book" backgroundColor={backgroundColor} className={styles.addButton} onClick={addBook} />
            </div>

            <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                title={title}
                description={description}
                handleChangeTitle={handleTitleChange}
                handleChangeDescription={handleDescriptionChange}
                handleSubmitEdit={handleSubmitEdit}
                handleAddItem={handleAddItem}
                handleCancel={closeModal}
                addItemBoolean={textChange}
                titleError={titleError}
                descriptionError={descriptionError}
                overlayClassName={styles.overlay} // Optionally pass overlay class name
                modalStyle={{
                    content: {
                        width: '40%',
                        height: '35%',
                        margin: 'auto',
                    }
                }} // Optionally pass custom modal style
                contentLabel="Custom Modal"
            />

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {items.map((item, index) => (
                    <Card className={styles.card}
                        item={item}
                        index={index}
                        handleEditItem={handleEditItem}
                        handleDeleteItem={handleDeleteItem}

                    />

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
