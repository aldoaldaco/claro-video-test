import { useState, useCallback, useEffect } from "react";

export default function Claro(props) {

    const [program] = useState('DOCTOR HOUSE');
    
    useCallback(() => {
        console.log('useCallback');
    }, []);

    useEffect(() => {
        console.log('useEffect');
    }, []);

    const closeModal = () => {
        props.onCloseModal();
    };

    return (
        <div className="Claro">
            <h1>{program}</h1>
            <button onClick={closeModal}>X</button>
        </div>
    );
};