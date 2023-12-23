import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/login-styles.css';

function LoginForm() {
	const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gửi dữ liệu đăng nhập tới backend
    axios.post('http://localhost:8000/api/users/login', { email, password })
      .then((response) => {
        // Xử lý phản hồi từ máy chủ (backend) nếu cần
  
		if (response.data.accessToken) {
			console.log(response.data.accessToken);
			localStorage.setItem('userToken', JSON.stringify(response.data.accessToken));

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
  <div className="form" onSubmit={handleSubmit}>
  <h1 style={{padding : "25px"}}>LOGIN ACCOUNT</h1>
    <form className="login-form">
      <input type="Email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
      <button>login</button>
      <p className="message">Not registered? <a href="/register">Create an account</a></p>
    </form>
  </div>
</div>
  );
}


export default LoginForm;