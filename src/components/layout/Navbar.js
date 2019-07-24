import React from 'react';
import { Link } from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import {connect} from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    let link = '';
    if(auth.isLoaded){
        link = auth.uid ? <SignInLink auth={auth} profile={profile}/> : <SignOutLink />
    }
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Home</Link>
                {link}                
            </div>
        </nav>
    );
};
const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
  
  export default connect(mapStateToProps)(Navbar)