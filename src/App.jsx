import React from 'react';
import './components/javascripts/Main';
import 'normalize.css';
import './styles/Main.scss';
import Load from './components/Load';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Abt from './components/About';
import Exp from './components/Experiences';
import Pro from './components/Projects';
import Con from './components/Contact';
import Ldr from './components/javascripts/Loader';

const App = () => {
    React.useEffect(() => {
        Ldr();
    });
    return (
        <>
            <Load />
            <header>
                <Navbar />
            </header>
            <main>
                <Home />
                <Abt />
                <Exp />
                <Pro />
                <Con />
            </main>
        </>
    );
};
export default App;