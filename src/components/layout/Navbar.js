import React from "react";

//router
import {Link} from "react-router-dom";

//signed in links
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

import {connect} from "react-redux";

const Navbar = (props) => {
    const {auth, profile} = props;

    const links = auth.uid ? (<SignedInLinks profile={profile}/>) : (<SignedOutLinks/>);
    return (
        <nav className="row d-flex bg-dark justify-content-between align-content-center px-4">
            <div className="col-auto">
                <Link to="/" className="text-light nav-link font-weight-bold h1">
                    LIST
                </Link>
            </div>
            <div className="col-6 ml-auto">
                {links}
            </div>

        </nav>
    );
};

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    };
};

export default connect(mapStateToProps)(Navbar);
