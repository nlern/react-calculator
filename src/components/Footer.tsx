import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t">
            <div className="container mx-auto h-16 py-2 pt-4 flex md:flex-row sm:flex-col justify-center align-center divide-x">
                <div className="copyright pr-4">
                    Copyright © 2021 Shantanu Dutta
                </div>
                <div className="attribution pl-4">
                    Icons made by{' '}
                    <a
                        href="https://www.freepik.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Freepik"
                    >
                        Freepik
                    </a>{' '}
                    from{' '}
                    <a
                        href="https://www.flaticon.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Flaticon"
                    >
                        www.flaticon.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
