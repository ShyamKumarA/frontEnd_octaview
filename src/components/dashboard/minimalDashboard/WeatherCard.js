import QRCode from 'react-qr-code';
import { Col, Button } from 'reactstrap';
import React, { useState } from 'react';



const WeatherCard = () => {
  const referralURL = 'https://admin.octtaview.com/auth/registerformik?id=6594eb0a914bacbd6de57687';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralURL);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset the copied state after 2 seconds
  };
  return ( 
    // <Card className="bg-cyan">
          <Col xs="12" className="text-black text-center">
            <QRCode value={referralURL} />
      <p className='text-bg-info mt-2'>
        Referral URL: {referralURL}
        <Button color='success'  type="button" onClick={copyToClipboard}>
  {copied ? 'Copied!' : 'Copy'}
</Button>
          </p>
          </Col>
    // </Card>
  );
};

export default WeatherCard;


// StaticQRCode.js



