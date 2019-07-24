import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import { signOut } from '../../store/actions/authActions'

const SignInLink = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/signIn' onClick={props.signOut}>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
            {props.profile.initials}
            </NavLink></li>
        </ul>
    );
};

const mapDispathToProps = (dispatch, props) =>{
    return{
        signOut: () => dispatch(signOut(props))
    }
}

export default compose(firebaseConnect(), connect(null,mapDispathToProps))(SignInLink);