import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';
import ButtonBlue from './ButtonBlue';

function ContactButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <ButtonBlue 
                onClick={() => setIsModalOpen(true)}
                className="whitespace-nowrap text-[11px] px-3 py-1.5 sm:text-sm sm:px-4 sm:py-2"
            >
                Estudio especializado
            </ButtonBlue>

            <BookingModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </>
    );
}

export default ContactButton;
