import { useEffect } from 'react';
import './App.css';
import Main from './components/Main';

function App() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);
    return (
        <Main/>
    );
}

export default App;
