import React from 'react';

interface ButtonProps {
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button
            type="button"
            className="absolute bottom-4 right-4 bg-[#66809e] text-white hover:bg-[#4a5a73] px-4 py-2 rounded-[100px]"
            onClick={onClick}
        >
            Limpiar
        </button>
    );
};

export default Button;