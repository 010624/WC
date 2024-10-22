import React, { useState } from 'react'; 
import './Aids.css'; 
 
const Aids = () => { 
    const [formData, setFormData] = useState({ 
        name: '', 
        age: '', 
        gender: '', 
        contact: '', 
        email: '', 
        subjects: '', 
        goal: '' 
    }); 
 
    const handleChange = (e) => { 
        const { name, value } = e.target; 
        setFormData((prevState) => ({ 
            ...prevState, 
            [name]: value 
        })); 
    }; 
 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert(JSON.stringify(formData, null, 2)); // For now, show data in an alert 
    }; 
 
    return ( 
        <div className="form-container"> 
            <h2>AI & DS Student Form</h2> 
            <form onSubmit={handleSubmit}> 
                <div className="form-group"> 
                    <label htmlFor="name">Name</label> 
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /> 
                </div> 
                <div className="form-group"> 
                    <label htmlFor="age">Age</label> 
                    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required /> 
                </div> 
                <div className="form-group"> 
                    <label htmlFor="gender">Gender</label> 
                    <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required> 
                        <option value="">Select</option> 
                        <option value="male">Male</option> 
                        <option value="female">Female</option> 
                        <option value="other">Other</option> 
                    </select> 
                </div> 
                <div className="form-group"> 
                    <label htmlFor="contact">Contact No</label> 
                    <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} required 
/> 
                </div> 
                <div className="form-group"> 
                    <label htmlFor="email">Email</label> 
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/> 
                </div> 
                <div className="form-group"> 
                    <label htmlFor="subjects">Favorite Subjects</label> 
                    <input type="text" id="subjects" name="subjects" value={formData.subjects} onChange={handleChange} /> 
                </div> 
                <div className="form-group"> 
                    <label htmlFor="goal">Goal</label> 
                    <textarea id="goal" name="goal" value={formData.goal} onChange={handleChange}></textarea> 
                </div> 
                <button type="submit" className="submit-btn">Submit</button> 
            </form> 
        </div> 
    ); 
}; 
 
export default Aids; 
