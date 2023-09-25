import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Root from './components/Root';
import Spacing from './components/Spacing';

import './index.scss';
import Tab from './pages/Song';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Root>
            <Navbar />
            <Spacing>
                <Tab />
            </Spacing>
            <Footer />
        </Root>
    </React.StrictMode>
);