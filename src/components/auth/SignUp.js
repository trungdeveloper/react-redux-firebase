import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'
import { compose } from 'redux'
import { withFirestore, firebaseConnect } from 'react-redux-firebase'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const {auth, authErr} = this.props;
    if(auth.uid) return <Redirect to={'/'} />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName" >First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} required />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} required />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
          <div className="red-text center">
            { authErr ? <p>{ authErr }</p> : null}
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    auth : state.firebase.auth,
    authErr : state.auth.authError
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    signUp : newUser => dispatch(signUp(newUser, props))
  }
}

export default compose(firebaseConnect(),  withFirestore, connect(mapStateToProps, mapDispatchToProps))(SignUp)