



// 3333333333333333333333
// 333333333333333333333333
// 333333333333333333333333333

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/MasterLandingPage.css";
// import medlogo from "../pics/medlogo.png";

// const doctorsData = [
//   { id: 1, name: "Dr. Indranath Banerjee", queueLength: 5, communityQueue: 10 },
//   { id: 2, name: "Dr. Nirmal Kumar Som", queueLength: 3, communityQueue: 7 },
//   { id: 3, name: "Dr. Prasanta K Sannigrahi", queueLength: 0, communityQueue: 2 },
//   { id: 4, name: "Dr. Sonali Dhibar", queueLength: 4, communityQueue: 8 },
//   { id: 6, name: "Dr. Seema Roy", queueLength: 1, communityQueue: 19 },
//   { id: 7, name: "Dr. Asmita Paria", queueLength: 2, communityQueue: 12 },
//   { id: 8, name: "Dr. Praggya Rit Roy", queueLength: 7, communityQueue: 9 },
//   { id: 9, name: "Dr. Dharmsheel Gupta", queueLength: 6, communityQueue: 20 },
// ];

// const MasterLandingPage = () => {
//   const [showModal, setShowModal] = useState(false); // To toggle the modal
//   const [selectedDoctor, setSelectedDoctor] = useState(null); // To store the selected doctor
//   const navigate = useNavigate();

//   // Handle the 'Join the Queue' button click
//   const handleProceed = () => {
//     setShowModal(true); // Show the modal with doctor list
//   };

//   // Handle the 'Add to Queue' button click
//   const handleAddToQueue = (doctor) => {
//     setSelectedDoctor(doctor); // Set the selected doctor
//     setShowModal(true); // Show the confirmation modal
//   };

//   // Handle 'Yes' in the modal (to confirm joining the queue)
//   const handleYes = () => {
//     setShowModal(false); // Close the modal
//     navigate("/landing"); // Redirect to the landing page
//   };

//   // Handle 'No' in the modal (to cancel joining the queue)
//   const handleNo = () => {
//     setShowModal(false); // Close the modal without any action
//   };

//   return (
//     <div className="master-landing-page">
//       <header className="master-header">
//         <img src={medlogo} alt="iMediX Logo" className="master-logo" />
//         <h1>Welcome to iMediX</h1>
//       </header>
//       <main className="master-content">
//         <p>
//           iMediX is a platform to connect patients with doctors seamlessly. Join
//           the queue and experience efficient, real-time updates about your
//           appointment. Simplify healthcare with iMediX.
//         </p>
//         <button onClick={handleProceed} className="proceed-button">
//           Join the Queue
//         </button>
//       </main>

//       {/* Show doctor list in a box above the content */}
//       {showModal && (
//         <div className="doctor-list-modal">
//           <h2>Select a Doctor to Join the Queue</h2>
//           <ul>
//             {doctorsData.map((doctor) => (
//               <li key={doctor.id} className="doctor-item">
//                 <span>{doctor.name} - Queue: {doctor.queueLength}</span>
//                 <button
//                   onClick={() => handleAddToQueue(doctor)}
//                   className="add-button"
//                 >
//                   Add
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Confirmation modal for joining the queue */}
//       {selectedDoctor && showModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h3>Do you want to join the queue for {selectedDoctor.name}?</h3>
//             <div className="modal-actions">
//               <button className="modal-btn" onClick={handleYes}>
//                 Yes
//               </button>
//               <button className="modal-btn" onClick={handleNo}>
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MasterLandingPage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/MasterLandingPage.css";
// import medlogo from "../pics/medlogo.png";

// const doctorsData = [
//   { id: 1, name: "Dr. Indranath Banerjee", queueLength: 5, communityQueue: 10 },
//   { id: 2, name: "Dr. Nirmal Kumar Som", queueLength: 3, communityQueue: 7 },
//   { id: 3, name: "Dr. Prasanta K Sannigrahi", queueLength: 0, communityQueue: 2 },
//   { id: 4, name: "Dr. Sonali Dhibar", queueLength: 4, communityQueue: 8 },
//   { id: 6, name: "Dr. Seema Roy", queueLength: 1, communityQueue: 19 },
//   { id: 7, name: "Dr. Asmita Paria", queueLength: 2, communityQueue: 12 },
//   { id: 8, name: "Dr. Praggya Rit Roy", queueLength: 7, communityQueue: 9 },
//   { id: 9, name: "Dr. Dharmsheel Gupta", queueLength: 6, communityQueue: 20 },
// ];

// const MasterLandingPage = () => {
//   const [showDoctorList, setShowDoctorList] = useState(false); // For doctor list visibility
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false); // For confirmation modal visibility
//   const [selectedDoctor, setSelectedDoctor] = useState(null); // To store the selected doctor
//   const navigate = useNavigate();

//   // Handle the 'Join the Queue' button click to show the doctor list
//   const handleProceed = () => {
//     setShowDoctorList(true); // Show the list of doctors
//   };

//   // Handle the 'Add to Queue' button click to show the confirmation modal
//   const handleAddToQueue = (doctor) => {
//     setSelectedDoctor(doctor); // Set the selected doctor
//     setShowConfirmationModal(true); // Show the confirmation modal
//   };

//   // Handle 'Yes' in the modal (to confirm joining the queue)
//   const handleYes = () => {
//     setShowConfirmationModal(false); // Close the confirmation modal
//     navigate("/landing"); // Redirect to the landing page
//   };

//   // Handle 'No' in the modal (to cancel joining the queue)
//   const handleNo = () => {
//     setShowConfirmationModal(false); // Close the confirmation modal without any action
//   };

//   return (
//     <div className="master-landing-page">
//       <header className="master-header">
//         <img src={medlogo} alt="iMediX Logo" className="master-logo" />
//         <h1>Welcome to iMediX</h1>
//       </header>
//       <main className="master-content">
//         <p>
//           iMediX is a platform to connect patients with doctors seamlessly. Join
//           the queue and experience efficient, real-time updates about your
//           appointment. Simplify healthcare with iMediX.
//         </p>
//         <button onClick={handleProceed} className="proceed-button">
//           Join the Queue
//         </button>
//       </main>

//       {/* Show doctor list in a box above the content */}
//       {showDoctorList && (
//         <div className="doctor-list-modal">
//           <h2>Select a Doctor to Join the Queue</h2>
//           <ul>
//             {doctorsData.map((doctor) => (
//               <li key={doctor.id} className="doctor-item">
//                 <span>{doctor.name} - Queue: {doctor.queueLength}</span>
//                 <button
//                   onClick={() => handleAddToQueue(doctor)}
//                   className="add-button"
//                 >
//                   Add
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Confirmation modal for joining the queue */}
//       {showConfirmationModal && selectedDoctor && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h3>Do you want to join the queue for {selectedDoctor.name}?</h3>
//             <div className="modal-actions">
//               <button className="modal-btn" onClick={handleYes}>
//                 Yes
//               </button>
//               <button className="modal-btn" onClick={handleNo}>
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MasterLandingPage;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MasterLandingPage.css";
import medlogo from "../pics/medlogo.png";

const MasterLandingPage = ({ doctors, updateQueueLength }) => {
  const [showDoctorList, setShowDoctorList] = useState(false); // For doctor list visibility
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // For confirmation modal visibility
  const [selectedDoctor, setSelectedDoctor] = useState(null); // To store the selected doctor
  const navigate = useNavigate();

  // Handle the 'Join the Queue' button click to show the doctor list
  const handleProceed = () => {
    setShowDoctorList(true); // Show the list of doctors
  };

  // Handle the 'Add to Queue' button click to show the confirmation modal
  const handleAddToQueue = (doctor) => {
    setSelectedDoctor(doctor); // Set the selected doctor
    setShowConfirmationModal(true); // Show the confirmation modal
  };

  // Handle 'Yes' in the modal (to confirm joining the queue)
  const handleYes = () => {
    // Update the queue length of the selected doctor
    updateQueueLength(selectedDoctor.id);

    setShowConfirmationModal(false); // Close the confirmation modal
    navigate("/landing"); // Redirect to the landing page
  };

  // Handle 'No' in the modal (to cancel joining the queue)
  const handleNo = () => {
    setShowConfirmationModal(false); // Close the confirmation modal without any action
  };

  return (
    <div className="master-landing-page">
      <header className="master-header">
        <img src={medlogo} alt="iMediX Logo" className="master-logo" />
        <h1>Welcome to iMediX</h1>
      </header>
      <main className="master-content">
        <p>
          iMediX is a platform to connect patients with doctors seamlessly. Join
          the queue and experience efficient, real-time updates about your
          appointment. Simplify healthcare with iMediX.
        </p>
        <button onClick={handleProceed} className="proceed-button">
          Join the Queue
        </button>
      </main>

      {/* Show doctor list in a box above the content */}
      {showDoctorList && (
        <div className="doctor-list-modal">
          <h2>Select a Doctor to Join the Queue</h2>
          <ul>
            {doctors.map((doctor) => (
              <li key={doctor.id} className="doctor-item">
                <span>{doctor.name} - Queue: {doctor.queueLength}</span>
                <button
                  onClick={() => handleAddToQueue(doctor)}
                  className="add-button"
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Confirmation modal for joining the queue */}
      {showConfirmationModal && selectedDoctor && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Do you want to join the queue for {selectedDoctor.name}?</h3>
            <div className="modal-actions">
              <button className="modal-btn" onClick={handleYes}>
                Yes
              </button>
              <button className="modal-btn" onClick={handleNo}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterLandingPage;
