import React, {Component} from "react";

import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import TodoList from "../projects/TodoList";
import Notifications from "./Notifications";
import {deleteTodo} from "../../store/actions/TodoActions";
import GroupList from "../projects/GroupList";
import {deleteGroup, joinGroup, removeGroup} from "../../store/actions/GroupActions";

class Dashboard extends Component {


    render() {
        const {todos, groups, actions, auth, notifications} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        {todos ? (
                            <TodoList todos={todos} actions={actions} user={auth.uid}/>
                        ) : (
                            <div style={{padding: 40}} className="center-align">
                                <div className="preloader-wrapper active">
                                    <div className="spinner-layer spinner-red-only">
                                        <div className="circle-clipper left">
                                            <div className="circle"/>
                                        </div>
                                        <div className="gap-patch">
                                            <div className="circle"/>
                                        </div>
                                        <div className="circle-clipper right">
                                            <div className="circle"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <Notifications user={auth.uid} notifications={notifications}/>
                    </div>
                    <div className="col-md-6 col-12">
                        <GroupList groups={groups} todos={todos}
                                   actions={actions} user={auth}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.firestore.ordered.todos,
        groups: state.firestore.ordered.groups,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            deleteTodo: (todo) => dispatch(deleteTodo(todo)),
            deleteGroup: (group) => dispatch(deleteGroup(group)),
            joinGroup: (group) => dispatch(joinGroup(group)),
            removeGroup: (group) => dispatch(removeGroup(group)),
        },
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: `users`,
            orderBy: ["createdAt", "desc"],
        },
        {
            collection: `todos`,
            orderBy: ["createdAt", "desc"],
        },
        {
            collection: `groups`,
            orderBy: ["createdAt", "desc"],
        },
        {
            collection: "notifications",
            orderBy: ["time", "desc"],
            limit: 5,
        },
    ])
)(Dashboard);
