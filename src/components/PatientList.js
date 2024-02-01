import React from 'react';
import { Link } from 'react-router-dom';
function PatientList(props){
    return(
        <div className="main-content">
          <div className="patientlist">
                <h2>Patients</h2>
                {props.obj.state.appointments.map((appointment, index) => (
                <div key={index} className='patient'>
                    <Link to={`/patientlist/${index}`}>
                    <div>Patient Name:{appointment.patientName}</div>
                    <div>Date:{appointment.date}</div>
                    <div>Slot:{appointment.time}</div>
                  
                </Link>
                </div>
                ))}
          </div>
        </div>

    )    
}

export default PatientList;