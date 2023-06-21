import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import React, { useState } from 'react';


function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const [alert, setAlert] = useState(null)

    // method to show alert
    const showAlert = (message, tag) => {
        setAlert({
            msg: message, 
            tag: tag
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#272727';
            showAlert("Dark mode has been enabled.", "success")
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled.", "success")
        }
    }
    return (
        <>
            {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
            {/* <Navbar/> */}
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <div className="container my-3">
                <Alert alert={alert}></Alert>
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </div>
        </>
    );
}

export default App;