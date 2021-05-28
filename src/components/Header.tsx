import React from 'react';

import calculatorLogo from '../calculator.png';

const Header: React.FC = () => {
    return (
        <header>
            <nav className="bg-white shadow">
                <div className="container mx-2 sm:mx-4 mx-auto">
                    <div className="flex items-center sm:items-stretch sm:justify-start h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="hidden md:block h-8 w-auto"
                                src={calculatorLogo}
                                alt="Calculator"
                            />
                            {'  '}
                            <h1 className="text-xl font-medium leading-relaxed inline-block md:ml-2 px-2 whitespace-nowrap text-blue">
                                React Calculator
                            </h1>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
