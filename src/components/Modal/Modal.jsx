import React, { useEffect } from 'react';
import styles from '../styles.module.css';

const Modal = ({ isOpen, image, onClose }) => {
    const handleImageClick = (e) => {
    e.stopPropagation();
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
        onClose();
    }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, [onClose]);

    return (
    <div className={`${styles.Overlay} ${isOpen ? styles.visible : ''}`} onClick={onClose}>
    <div className={styles.Modal}>
        <img src={image} alt="" onClick={handleImageClick} />
    </div>
    </div>
    );
};

export default Modal;