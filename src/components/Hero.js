import React,{useState} from 'react';
import './Hero.css';
import heroImage from '../assets/Gallery_13.jpg'; // Add a suitable image in the assets folder



const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    origin: '',
    days: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowPopup(false);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      age: '',
      sex: '',
      origin: '',
      days: ''
    });
  };
  return (
    <section id="hero" className="hero">
      <img src={heroImage} alt="Heritage Hotel" />
      <div className="hero-content">
        {/* <h2 className='main-content'>Experience Royal Luxury</h2>
        <p className='sub-content'>Stay at the magnificent palatial interiors of Jodhpur</p> */}
        {/* <button className='btn-content'>Book Now</button> */}
        <div className="App">
      <button onClick={() => setShowPopup(true)} className="book-now-btn">Book Now</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </label>
              <label>
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />
              </label>
              <label>
                Sex:
                <select name="sex" value={formData.sex} onChange={handleInputChange} required>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label>
                Origin:
                <input type="text" name="origin" value={formData.origin} onChange={handleInputChange} required />
              </label>
              <label>
                Days:
                <input type="number" name="days" value={formData.days} onChange={handleInputChange} required />
              </label>
              <div className="form-buttons">
                <button type="button" onClick={handleReset}>Reset</button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
      </div>
    </section>
  );
}

export default Hero;
