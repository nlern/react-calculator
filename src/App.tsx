import React from 'react';
import Calculator from './components/Calculator';
import Layout from './components/Layout';

const App: React.FC = () => {
    return (
        <Layout>
            <Calculator />
        </Layout>
    );
};

export default App;
