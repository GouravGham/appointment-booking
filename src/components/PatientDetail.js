import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
function PatientDetail(props){
    const {patientId} = useParams();
    const index=parseInt(patientId);
    const appointment=props.obj.state.appointments[index];
    if (!appointment) {
        return <div>Appointment not found</div>;
    }
    return(
        <div className="main-content">
          <div className="patientdetails">
                    <h3>Patient Details</h3>
                    <p>Name: {appointment.patientName}</p>
                    <p>Gender: {appointment.gender}</p>
                    <p>Age: {appointment.age}</p>
                    <p>Phone no.: {appointment.phoneNumber}</p>
                    <p>Appointment Date: {appointment.date}</p>
                    <p>Slot: {appointment.time}</p>
                    <p>Doctor: {appointment.doctorName}</p>
                    <p>Appointment Type: {appointment.appointmentType}</p>
                    <Link to = '/patientlist'>
                    <button
                        className="btn"
                        onClick={() => props.obj.handleDeleteAppointment(index)}
                      >
                        Delete
                      </button>
                      </Link>
                      <Link to='/'><button
                          className="btn"
                          onClick={() => props.obj.handleEditAppointment(index)}
                        >
                          Edit
                        </button>
                        </Link>
                 
          </div>
        </div>

    )    
}

export default PatientDetail;