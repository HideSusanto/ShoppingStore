import jwt_decode from 'jwt-decode';

function isTokenValid() {
  const token = localStorage.getItem('userToken');
  if (!token) {
    return false;
  }
  
  const decodedToken = jwt_decode(token);
  const currentDate = new Date();
  console.log(decodedToken);
  // JWT exp is in seconds
  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    console.log("Token expired.");
    return false;
  } else {
    console.log("Valid token");
    return true;
  }
}

export default isTokenValid;
