import React from 'react';
import Calculator from './components/Calculator';
import Layout from './components/Layout';

const App: React.FC = () => {
    return (
        <Layout>
            <div className="calculator flex flex-col">
                <Calculator />
            </div>
        </Layout>
    );
};

export default App;
