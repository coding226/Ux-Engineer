import React from "react";
// import {Link} from "react-router-dom";
// import

const GroupSummary = ({group, user, actions}) => {


    function deleteButton() {
        if (group.authorId === user) {
            return (<span
                onClick={() => actions.deleteGroup(group.id)}
                className="waves-effect waves-light btn pink mr4 text-white">
                   Delete
            </span>)
        }
    }

    function joinGroup() {
        if (!group.users.includes(user)) {
            return (<span
                onClick={() => actions.joinGroup(group.id)}
                className="waves-effect waves-light btn green text-white">
                    Join
            </span>)
        } else {
            return (<span
                onClick={() => actions.removeGroup(group.id)}
                className="waves-effect waves-light btn yellow text-dark">
                    Leave
            </span>)
        }
    }

    return (
        <div className="row d-flex align-items-center bg-light shadow-sm border-0 p-2">
            <span className="col-6 font-weight-bold">{group.title}</span>
            <div className="col-6">
                {deleteButton()}
                {joinGroup()}
            </div>
        </div>
    );
};

export default GroupSummary;
