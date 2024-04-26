import React, { useState } from 'react';

const LoginPage = () => {
  const [usr, setUsr] = useState('');
  const [pwd, setPwd] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsr(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPwd(event.target.value);
  };

  const handleLogin = () => {
    console.log('Login button clicked:', usr, pwd);
    if (usr === 'admin' && pwd === 'admin') {
      setIsLoggedIn(true);
      // Redirect or navigate to another page here
    }
  };

  return (
    <div>
  <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
      <div className="d-flex justify-content-center py-4">
        <a href="index.html" className="logo d-flex align-items-center w-auto">
          <img src="assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">Racer-One</span>
        </a>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
          <p className="text-center small">Enter your username & password to login</p>

          <form className="row g-3 needs-validation" noValidate>
            <div className="input-group has-validation">
              <label htmlFor="yourUsername" className="form-label">Username: </label>
              <input
                type="text"
                name="Username"
                className="form-control"
                id="yourUsername"
                value={usr}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <br />
            <div className="col-12">
              <label htmlFor="yourPassword" className="form-label">Password: </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="yourPassword"
                value={pwd}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <br />
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>
            </div>
            <br />
            <div className="col-12">
              <button className="btn btn-primary w-100" onClick={handleLogin} type="button">Login</button>
            </div>
            <div className="col-12">
              <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
            </div>
          </form>
        </div>
      </div>
      <div className="credits">
        Designed by <a href="http://www.murraystate.edu/">Dr. Jason T. Owen, DBA, CSM | Murray State University CSIS Dept</a>
      </div>
    </div>
  </section>
</div>

  );
};

export default LoginPage;
