import React, { useState } from 'react';

const CommonModal = ({ title, buttonText, handleButtonClick, closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = () => {
    // Perform validation here
    if (!username || !password) {
      setValidationError('Username and password are required');
    } else {
      // Call the handleButtonClick function passed as prop
      handleButtonClick(username, password).then((message)=>{
          setResponseMessage(message);
          setTimeout(() => {
            closeModal();
          }, 1500);
      });
      // Close the modal
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '500px', maxHeight: '500px' }}>
        <div className="modal-content">
          <div className="modal-header" style={{borderBottom:'none', textAlign:'right', display:'block'}}>
            <button type="button" className="close" style={{ borderRadius: '50%' }} aria-label="Close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h5 className="modal-title text-center pb-4">{title}</h5>
            {validationError && <p className="text-danger">{validationError}</p>}
            <div className="form-group pb-3">
              <div className='row'>
                <div className='col-4'>
                  <label htmlFor="username">Username</label>
                </div>
                <div className='col-8'>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="form-group pb-3">
              <div className='row'>
                <div className='col-4'>
                  <label htmlFor="password">Password</label>
                </div>
                <div className='col-8'>
                  <div className="input-group">
                    <input type={showPassword ? "text" : "password"} className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="input-group-append">
                      <button className="toggle-password-button" type="button" onClick={togglePasswordVisibility}>
                      <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {responseMessage && <p className="text-info">{responseMessage}</p>}
          </div>
          <div className="modal-footer pb-5" style={{borderTop:'none', display: 'block'}}>
            <button type="button" className="btn btn-primary btn-block" onClick={handleSubmit}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
