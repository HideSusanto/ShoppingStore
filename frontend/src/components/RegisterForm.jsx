import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/login-styles.css';

function LoginForm() {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gửi dữ liệu đăng nhập tới backend
    axios.post('http://localhost:8000/api/users/register', { username, email, password })
      .then((response) => {
        // Xử lý phản hồi từ máy chủ (backend) nếu cần
  
		if (response) {
			console.log(response);

		}
		//console.log(localStorage.getItem('userToken'));
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.log("error: " + error.message);
      });
  };
  	
  return (
	<div className="login-page">
  <div className="form">
    <h1 style={{padding : "25px"}}>REGISTER ACCOUNT</h1>
    <form className="register-form" method="POST" onSubmit={handleSubmit}>
      <input type="text" placeholder="name" onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
      <input type="text" placeholder="email address" onChange={(e) => setEmail(e.target.value)}/>
      <button>create</button>
      <p className="message">Already registered? <a href="/login">Sign In</a></p>
    </form>
  </div>
</div>
  );
}


export default LoginForm;