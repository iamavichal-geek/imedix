// import React from "react";
// import "../styles/DoctorList.css";

// const DoctorList = ({ doctors, onDoctorSelect }) => {
//   return (
//     <div className="doctor-list">
//       <h2>Available Doctors</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Doctor Name</th>
//             <th>Queue Length</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {doctors.map((doctor) => (
//             <tr key={doctor.id}>
//               <td>{doctor.name}</td>
//               <td>{doctor.queueLength}</td>
//               <td>
//                 <button onClick={() => onDoctorSelect(doctor)}>Add to Queue</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DoctorList;

import React from "react";
import "../styles/DoctorList.css";

const DoctorList = ({ doctors }) => {
  return (
    <div className="doctor-list">
      <h2>Available Doctors</h2>
      <table>
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Queue Length</th>
            <th>Community Queue</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.queueLength}</td>
              <td>{doctor.communityQueue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
