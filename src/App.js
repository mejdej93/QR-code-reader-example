import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import './App.css';

function App() {

    const [code, setCode] = useState('');

    const handleScan = data => {
        if (data) {
            setCode(data);
        }
    };

    const handleError = err => {
        console.error(err);
    };

    return (
        <div className="App">
            <div className="">
                <QrReader
                    delay={ 300 }
                    onError={ handleError }
                    onScan={ handleScan }
                    onImageLoad={ handleScan }
                    style={ { width: '100%' } }
                />
                <p>{ code }</p>
            </div>
        </div>
    );
}

export default App;
