import React, {Component} from "react";

import {connect} from "react-redux";
import {createGroup} from "../../store/actions/GroupActions";
import {Redirect} from "react-router-dom";

class CreateGroup extends Component {
    state = {
        title: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        const {title} = this.state;

        if (title.length !== 0) {
            e.preventDefault();
            this.props.createGroup(this.state);
            this.props.history.push("/");
        } else {
            console.log("Title field can't be empty");
        }
    };

    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to="/login"/>;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Group</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn btn-primary lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createGroup: (todo) => dispatch(createGroup(todo)),
    };
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);
