import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import React, { useState } from 'react';


function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const [bgcolor, setBgcolor] = useState("white") // To set background color for the div, etc

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

    const toggleMode = (theme) => {
        if (theme === 'dark-gray') {
            setMode('dark-gray');
            let bg = '#303030';
            document.body.style.backgroundColor = bg;
            setBgcolor(bg);
            showAlert("Dark mode has been enabled.", "success")
        }
        else if (theme === 'light') {
            setMode('light');
            let bg = '#fff';
            document.body.style.backgroundColor = bg;
            setBgcolor(bg);
            showAlert("Light mode has been enabled.", "success");
        }
        else if (theme === 'dark-blue') {
            setMode('dark-blue');
            let bg = '#07152a';
            document.body.style.backgroundColor = bg;
            setBgcolor(bg);
            showAlert("Dark-Blue mode has been enabled.", "success");
        }
        else if (theme === 'dark-teal') {
            setMode('dark-teal');
            let bg = '#0b221a';
            document.body.style.backgroundColor = bg;
            setBgcolor(bg);
            showAlert("Dark-Teal mode has been enabled.", "success") ;
        }
        else if (theme === 'dark-brown') {
            setMode('dark-brown');
            let bg = '#281b1b';
            document.body.style.backgroundColor = bg;
            setBgcolor(bg);
            showAlert("Dark-Brown mode has been enabled.", "success")
        }
    }
    return (
       <>
        <>
            {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
            {/* <Navbar/> */}
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <div className="container my-3">
                <Alert alert={alert}></Alert>
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} bgcolor={bgcolor} />
            </div>
        </>
       </>
    );
}

export default App;