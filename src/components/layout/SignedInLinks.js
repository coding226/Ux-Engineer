import React from "react";

//router
import {NavLink} from "react-router-dom";

import {connect} from "react-redux";
import {signOut} from "../../store/actions/AuthActions";

const SignedInLinks = (props) => {
    return (
        <div className="d-inline right">
            <span className="font-weight-bold h4"> {props.profile.initials}</span>
            <NavLink className="btn btn-light mx-3 font-weight-bold" to="/create">New TODO</NavLink>
            <NavLink className="btn btn-warning mx-3 font-weight-bold" to="/group">New Group</NavLink>
            <span id="logout" className="btn btn-danger mx-2" onClick={props.signOut}>Logout</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
