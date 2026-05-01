import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';
import ButtonBlue from './ButtonBlue';

function ContactButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <ButtonBlue onClick={() => setIsModalOpen(true)}>
                Iniciar Proyecto
            </ButtonBlue>

            <BookingModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </>
    );
}

export default ContactButton;
