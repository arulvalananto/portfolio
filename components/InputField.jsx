import React from 'react';

const InputField = () => {
    return (
        <div className="text-gray-500 flex items-center">
            <p className="flex-2">
                <span className="text-dark-orange">visitor</span>@
                <span className="text-secondary">arulvalananto</span>
                <span>:$ ~</span>
            </p>
            <input
                className="bg-transparent flex-1 outline-none border-none pl-2 text-dark-orange"
                type="text"
            />
        </div>
    );
};

export default InputField;
