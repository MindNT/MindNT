import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';

function ContactButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="
                    px-4 py-2
                    bg-gray-900
                    text-white
                    text-sm
                    font-inter font-medium
                    rounded-full
                    hover:bg-gray-800
                    transition-all duration-200
                    tracking-normal-apple
                "
            >
                Agendar cita
            </button>

            <BookingModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </>
    );
}

export default ContactButton;
