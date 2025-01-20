import React, { useEffect, useState } from 'react';
import cuid from 'cuid';
import { QRCodeSVG } from 'qrcode.react';

const CuidGenerator = () => {
    const [currentCuid, setCurrentCuid] = useState('');

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'r') {
                const newCuid = cuid();
                setCurrentCuid(newCuid);
                console.log('Generated CUID:', newCuid);
            } else if (event.key === 'c') {
                if (currentCuid) {
                    navigator.clipboard.writeText(currentCuid)
                        .then(() => {
                            console.log('CUID copied to clipboard:', currentCuid);
                        })
                        .catch((err) => {
                            console.error('Failed to copy CUID:', err);
                        });
                } else {
                    console.log('No CUID to copy. Press "r" to generate one.');
                }
            }
        };

        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, [currentCuid]);

    return (
        <div>
            {currentCuid && (
                <>
                    <h2>{currentCuid}</h2>
                    <QRCodeSVG value={currentCuid} size={128} />
                </>
            )}
            <p>Press "r" to generate a CUID.</p>
            <p>Press "c" to copy the current CUID to the clipboard.</p>

            {/* STRATCHPAD */}
            <div>
                <textarea />
            </div>
        </div>
    );
};

export default CuidGenerator;
