import React, { useRef, useEffect } from "react";
import QrScanner from "qr-scanner";
import '../styles/QRScanner.css';

const QRScanner = ({ onScanComplete }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const qrScanner = new QrScanner(
      videoRef.current,
      (result) => {
        onScanComplete(result);
        qrScanner.stop();
      },
      { highlightScanRegion: true }
    );
    qrScanner.start();

    return () => {
      qrScanner.destroy();
    };
  }, [onScanComplete]);

  return <video ref={videoRef} />;
};

export default QRScanner;
