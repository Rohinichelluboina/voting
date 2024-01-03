import React,{ useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateStyles.css';

const IndividualVoterForm = () => {

    const history=useNavigate();
    const [voter, setVoter] = useState({
        name: '',
        regNum: '',
        department:'',
        dob: ''
      });
      const handleChange = e => {
        setVoter({ ...voter, [e.target.name]: e.target.value });
      };
      const handleSubmit = async e => {
        e.preventDefault();
    
        try {
          await axios.post('http://localhost:8080/addvoter', voter);
          // Success message or redirect to another page after successful addition
          console.log('Voter added successfully:', voter);
    
          setVoter({
            name: '',
            regNum: '',
            department:'',
            dob: ''
          });
          history('/SuccessRegistrationMessage'); 
          
        } catch (error) {
          console.error('Error adding voter:', error);
          // Display error message or handle the error accordingly
        }
      };
  return (
    
    <div className="form-container">
      <h2>Voter Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={voter.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="regNum">Registration Number:</label>
          <input
            type="text"
            id="regNum"
            name="regNum"
            value={voter.regNum}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={voter.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={voter.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Create Voter</button>
        </div>
      </form>
    </div>
    
  );
}

export default IndividualVoterForm
