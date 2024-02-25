import React ,{useState} from 'react';
import '../styles/SignUp.css'; // Import your CSS file

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');


  function handleSignUp(e){
    e.preventDefault()
    
    const requestBody = {
      name,
      email,
      password,
      phoneNo:phone,
    };
 
    fetch('http://localhost:8000/api/v_1/internal/auth/register', {
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
        console.log('Response from server:', data);
        localStorage.setItem('access-token', data.data.accessToken)
        alert("User registered Successfully")
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
          <h2>Sign Up</h2>
          <div className="form-group text-white">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No</label>
            <input type="text" id="phone" name="phone" value={phone}  onChange={(e) => setPhone(e.target.value)}placeholder="Enter your phone number" />
          </div>
          <button onClick={(e)=>{handleSignUp(e)}}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
