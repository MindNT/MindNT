import React from 'react';

/**
 * ButtonBlue — Botón reutilizable con el color corporativo #034EA2.
 * Diseño pill (rounded-full), idéntico en forma a ContactButton.
 *
 * Props:
 *  @param {string}   children   - Texto / contenido del botón
 *  @param {function} onClick    - Handler de clic
 *  @param {'button'|'submit'|'reset'} type - Tipo HTML (default: 'button')
 *  @param {boolean}  disabled   - Deshabilitar el botón
 *  @param {string}   className  - Clases Tailwind extra para override puntual
 *  @param {object}   rest       - Cualquier otro prop HTML válido para <button>
 */
function ButtonBlue({ children, onClick, type = 'button', disabled = false, className = '', ...rest }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                px-4 py-2
                bg-[#034EA2]
                text-white
                text-sm
                font-inter font-medium
                rounded-full
                hover:bg-[#023d80]
                transition-all duration-300 ease-out
                tracking-normal-apple
                shadow-[0_8px_30px_-10px_rgba(3,78,162,0.6)]
                hover:shadow-[0_12px_40px_-10px_rgba(3,78,162,0.8)]
                active:scale-[0.97]
                disabled:opacity-50 disabled:cursor-not-allowed
                ${className}
            `}
            {...rest}
        >
            {children}
        </button>
    );
}

export default ButtonBlue;
