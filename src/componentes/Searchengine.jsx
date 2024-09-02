import React , { useState } from 'react';

const Searchengine = () => {
    
    const [texto, setTexto] = useState('');

    const handleSearch = () => {
      setTexto(event.target.value)
    };

    const handleBuscar = () => {
        
        console.log('Buscar:', texto);
    };

    return (
        <div>
            <input
                type="text"
                value={texto}
                onChange={handleSearch}
                placeholder="Buscar..."
            />
            <button onClick={handleBuscar}>Buscar</button>
        </div>
    );
};  

export default Searchengine;
