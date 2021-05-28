import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t">
            <div className="mx-2 h-min-16 py-2 pt-4 flex md:flex-row flex-col justify-center text-center align-center md:divide-x">
                <div className="copyright p-2 md:pr-4">
                    Copyright © 2021 Shantanu Dutta
                </div>
                <div className="attribution md:pl-4 p-2">
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
