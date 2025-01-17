import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';


const IsoDateGenerator = () => {
  const [currentDate, setCurrentDate] = useState('');

  const generateIsoDate = () => {
    const newDate = new Date().toISOString();
    setCurrentDate(newDate);
    console.log('Generated ISO Date:', newDate);
  };

  return (
    <div>
      <button onClick={generateIsoDate}>Generate ISO Date</button>
      {currentDate && (
        <div>
          <p>Current ISO Date:</p>
          <code>{currentDate}</code>
          <br />
          <QRCodeSVG value={currentDate} size={64} />
        </div>
      )}
    </div>
  );
};

export default IsoDateGenerator;
