import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col h-full">
            <Header />
            <main className="flex-1 container mx-auto p-2">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
