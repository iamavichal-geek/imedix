


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MasterLandingPage from "./pages/MasterLandingPage";
// import LandingPage from "./pages/LandingPage";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MasterLandingPage />} />
//         <Route path="/landing" element={<LandingPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterLandingPage from "./pages/MasterLandingPage";
import LandingPage from "./pages/LandingPage";
// import "";

const App = () => {
  const [doctorsData, setDoctorsData] = useState([
    { id: 1, name: "Dr. Indranath Banerjee", queueLength: 5, communityQueue: 10 },
    { id: 2, name: "Dr. Nirmal Kumar Som", queueLength: 3, communityQueue: 7 },
    { id: 3, name: "Dr. Prasanta K Sannigrahi", queueLength: 0, communityQueue: 2 },
    { id: 4, name: "Dr. Sonali Dhibar", queueLength: 4, communityQueue: 8 },
    { id: 6, name: "Dr. Seema Roy", queueLength: 1, communityQueue: 19 },
    { id: 7, name: "Dr. Asmita Paria", queueLength: 2, communityQueue: 12 },
    { id: 8, name: "Dr. Praggya Rit Roy", queueLength: 7, communityQueue: 9 },
    { id: 9, name: "Dr. Dharmsheel Gupta", queueLength: 6, communityQueue: 20 },
  ]);

  // Function to update the queueLength of a doctor when a user joins
  const updateQueueLength = (doctorId) => {
    setDoctorsData((prevDoctors) =>
      prevDoctors.map((doctor) =>
        doctor.id === doctorId
          ? { ...doctor, queueLength: doctor.queueLength + 1 }
          : doctor
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MasterLandingPage doctors={doctorsData} updateQueueLength={updateQueueLength} />}
        />
        <Route
          path="/landing"
          element={<LandingPage doctors={doctorsData} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
