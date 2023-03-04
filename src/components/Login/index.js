// Write your JS code here
import {Component} from 'react'

class Login extends Component {
  submitForm = async event => {
    const userName = 'rahul'

    const passWord = 'rahul@2021'

    const userDetails = {userName, passWord}

    event.preventDefault()

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',

      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data.jwt_token)
  }

  render() {
    return (
      <form className="container" onSubmit={this.submitForm}>
        <h1>Please Login</h1>

        <button type="submit">Login with Sample Creds</button>
      </form>
    )
  }
}

export default Login
