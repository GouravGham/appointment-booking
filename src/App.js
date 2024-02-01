import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PatientList from './components/PatientList';
import PatientDetail from './components/PatientDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import {React,Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientName: '',
      gender: '',
      age: '',
      phoneNumber: '',
      date: '',
      time: '',
      doctorName: '',
      appointmentType: '',
      appointments: [],
      editingIndex: -1,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      patientName,
      gender,
      age,
      phoneNumber,
      date,
      time,
      doctorName,
      appointmentType,
      editingIndex,
    } = this.state;

    const newAppointment = {
      patientName,
      gender,
      age,
      phoneNumber,
      date,
      time,
      doctorName,
      appointmentType,
    };

    if (editingIndex === -1) {
      this.setState((prevState) => ({
        appointments: [...prevState.appointments, newAppointment],
      }));
    } else {
      const updatedAppointments = [...this.state.appointments];
      updatedAppointments[editingIndex] = newAppointment;
      this.setState({
        appointments: updatedAppointments,
        editingIndex: -1,
      });
    }

    this.setState({
      patientName: '',
      gender: '',
      age: '',
      phoneNumber: '',
      date: '',
      time: '',
      doctorName: '',
      appointmentType: '',
    });
  };

  handleEditAppointment = (index) => {
    const appointmentToEdit = this.state.appointments[index];
    this.setState({
      ...appointmentToEdit,
      editingIndex: index,
    });
  };

  handleDeleteAppointment = (index) => {
    const updatedAppointments = [...this.state.appointments];
    updatedAppointments.splice(index, 1);
    this.setState({
      appointments: updatedAppointments,
    });
  };


  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Header/>
          <Routes>
              <Route path="/" element = {<Home obj={this}/>}/>
              <Route path="/aboutUs" element = {<AboutUs/>}/>
              <Route path="/contactUs" element = {<ContactUs/>}/>
              <Route path="/patientlist" element = {<PatientList obj={this}/>}/>
              <Route path="/patientlist/:patientId" element = {<PatientDetail obj={this}/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
