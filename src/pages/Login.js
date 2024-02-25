import React ,{useState} from 'react';
import '../styles/SignUp.css'; // Import your CSS file

const Login = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleLogIn(e){
    e.preventDefault()
    
    const requestBody = {
      email,
      password,
    };
 
    fetch('http://localhost:8000/api/v_1/internal/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        console.log('Response from server:', data.data.accessToken);
        localStorage.setItem('access-token', data.data.accessToken)
        alert("User logged in Successfully")

      })
      .catch((error) => {
        console.error('There was an error:', error);
        alert("User Already registered or a server error exist")
      });
     
}

  return (
    <div className="signup-container">
      <div className="background-image"></div>
      <div className="form-container">
        <form className="signup-form text-white">
          <h2>Log In</h2>
        
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"  value={password}   onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password" />
          </div>
         
          <button onClick={handleLogIn}>LogIn</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
