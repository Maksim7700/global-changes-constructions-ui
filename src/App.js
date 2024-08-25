import { useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);

    return (
        <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
    </Routes>
    </Router>
    );
}

export default App;
