import React from 'react';
function Home(props){
    return(
        <div className='main-content'>
          <div className="container register-form">
            <div className="form">
              <div className="note">
                <p>Welcome to Gradious Doctor Appointment Booking</p>
              </div>

              <form onSubmit={props.obj.handleFormSubmit}>
                <div className="form-content">
                  <div className="form-row">
                      <div className="form-group">
                        <input
                          type="text"
                          name="patientName"
                          className="form-control"
                          placeholder="Patient Name *"
                          value={props.obj.state.patientName}
                          onChange={props.obj.handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <select
                          name="gender"
                          className="form-control"
                          value={props.obj.state.gender}
                          onChange={props.obj.handleInputChange}
                          required
                        >
                          <option value="" disabled>Gender</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          name="age"
                          className="form-control"
                          placeholder="Age *"
                          value={props.obj.state.age}
                          onChange={props.obj.handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phoneNumber"
                          className="form-control"
                          placeholder="Phone Number *"
                          value={props.obj.state.phoneNumber}
                          onChange={props.obj.handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="date"
                          name="date"
                          className="form-control"
                          placeholder="Date *"
                          value={props.obj.state.date}
                          onChange={props.obj.handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="time"
                          className="form-control"
                          placeholder="Time *"
                          value={props.obj.state.time}
                          onChange={props.obj.handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="doctorName"
                          className="form-control"
                          placeholder="Doctor Name *"
                          value={props.obj.state.doctorName}
                          onChange={props.obj.handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <select
                          name="appointmentType"
                          className="form-control"
                          value={props.obj.state.appointmentType}
                          onChange={props.obj.handleInputChange}
                          required
                        >
                          <option value="" disabled>Type</option>
                          <option value="Consult">Consult</option>
                          <option value="Revisit">Revisit</option>
                        </select>
                      </div>
                  </div>
                  <button type="submit" className="btnSubmit">
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

    )    
}

export default Home;