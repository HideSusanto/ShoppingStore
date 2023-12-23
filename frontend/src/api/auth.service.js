class AuthService {
    login(email, password) {
      // Make a POST request to your /login endpoint with the email and password
    }

    logout() {
      // Remove the JWT from local storage
    }

    getCurrentUser() {
      // Return the user's information stored in local storage
    }
  }

  export default new AuthService();