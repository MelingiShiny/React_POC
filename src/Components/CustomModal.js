import React from 'react'
import styles from '../Styles/MyBooks.module.css'
import Modal from 'react-modal';

function CustomModal(props) {
    const {
        isOpen,
        onRequestClose,
        title,
        description,
        handleChangeTitle,
        handleChangeDescription,
        handleSubmitEdit,
        handleAddItem,
        handleCancel,
        overlayClassName,
        modalStyle,
        contentLabel,
        addItemBoolean
    } = props;


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            overlayClassName={overlayClassName || styles.overlay}
            appElement={document.getElementById('root')}
            style={modalStyle || {
                content: {
                    width: '40%',
                    height: '35%',
                    margin: 'auto',
                },
            }}
        >
            <h2>{addItemBoolean ? 'Add Item' : 'Edit Item'}</h2>
            <div style={{ marginBottom: '10px' }}>
                <label className={styles.label}>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                    style={{ width: '100%', boxSizing: 'border-box' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label className={styles.label}>Description:</label>
                <textarea
                    value={description}
                    onChange={handleChangeDescription}
                    style={{ width: '100%', boxSizing: 'border-box' }}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {addItemBoolean ? (<button onClick={handleAddItem} className={styles.submitButton}>
                    Submit
                </button>

                ) : (


                    <button onClick={handleSubmitEdit} className={styles.submitButton}>
                        Save Changes
                    </button>
                )}
                <button onClick={handleCancel} className={styles.closeButton}>
                    Cancel
                </button>
            </div>
        </Modal>
    );
}
export default CustomModal