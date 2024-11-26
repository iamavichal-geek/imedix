// import React, { useState } from "react";
// import LoginForm from "../components/LoginForm";
// import DoctorList from "../components/DoctorList";
// import QRScanner from "../components/QRScanner";
// import QueueDetails from "../components/QueueDetails";
// import "../styles/LandingPage.css";
// import medlogo from "../pics/medlogo.png";

// const LandingPage = () => {
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [queueLength, setQueueLength] = useState(0);
//   const [isQRScanning, setIsQRScanning] = useState(false);

//   // Mock list of doctors
//   const doctorsData = [
//     { id: 1, name: "Dr. Indranath Banerjee", queueLength: 5, communityQueue: 10 },
//     { id: 2, name: "Dr. Nirmal Kumar Som", queueLength: 3, communityQueue: 7 },
//     { id: 3, name: "Dr. Prasanta K Sannigrahi", queueLength: 0, communityQueue: 2 },
//     { id: 4, name: "Dr. Sonali Dhibar", queueLength: 4, communityQueue: 8 },
//     { id: 6, name: "Dr. Seema Roy", queueLength: 1, communityQueue: 19 },
//     { id: 7, name: "Dr. Asmita Paria", queueLength: 2, communityQueue: 12 },
//     { id: 8, name: "Dr. Praggya Rit Roy", queueLength: 7, communityQueue: 9 },
//     { id: 9, name: "Dr. Dharmsheel Gupta", queueLength: 6, communityQueue: 20 },
//   ];
  

//   const handleDoctorSelect = (doctor) => {
//     setSelectedDoctor(doctor);
//     setIsQRScanning(true);
//   };

//   const handleScanComplete = () => {
//     setQueueLength(selectedDoctor.queueLength + 1);
//     setIsQRScanning(false);
//   };

//   return (
//     <div className="landing-page">
//       <header className="landing-header">
//         <img src={medlogo} alt="iMediX Logo" className="landing-logo" />
//         <h1>Welcome to iMediX</h1>
//       </header>
//       <div className="main-content">
//         <div className="login-section">
//           <LoginForm />
//         </div>
//         <div className="doctors-section">
//           {!isQRScanning ? (
//             <>
//               <DoctorList doctors={doctorsData} onDoctorSelect={handleDoctorSelect} />
//               {selectedDoctor && (
//                 <QueueDetails doctor={selectedDoctor} queueLength={queueLength} />
//               )}
//             </>
//           ) : (
//             <QRScanner onScanComplete={handleScanComplete} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import DoctorList from "../components/DoctorList";
import QRScanner from "../components/QRScanner";
import QueueDetails from "../components/QueueDetails";
import "../styles/LandingPage.css";
import medlogo from "../pics/medlogo.png";

const LandingPage = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isQRScanning, setIsQRScanning] = useState(false);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setIsQRScanning(true);
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src={medlogo} alt="iMediX Logo" className="landing-logo" />
        <h1>Welcome to iMediX</h1>
      </header>
      <div className="main-content">
        <div className="login-section">
          <LoginForm />
        </div>
        <div className="doctors-section">
          {!isQRScanning ? (
            <>
              <DoctorList doctors={doctors} onDoctorSelect={handleDoctorSelect} />
              {selectedDoctor && (
                <QueueDetails doctor={selectedDoctor} queueLength={selectedDoctor.queueLength} />
              )}
            </>
          ) : (
            // <QRScanner onScanComplete={handleScanComplete} />
            null
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


