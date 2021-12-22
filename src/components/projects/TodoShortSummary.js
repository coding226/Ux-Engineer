import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";
// import

const TodoShortSummary = ({todo, actions}) => {
    // console.log({ todo, actions });
    return (
        <div
            style={{marginBottom: 30}}
            className="p-3 bg-light shadow-sm border-0"
        >
            <div className="card-content text-dark">
                <span className="card-title font-weight-bold">{todo.title}</span>
                <p>Posted by {`${todo.authorFirstName} ${todo.authorLastName}`}</p>
                <p className="black-text">
                    {moment(todo.createdAt.toDate()).calendar()}
                </p>
                <div className="right">
                    <Link to={`/todo/` + todo.id} className="waves-effect waves-light btn white">
                        <i className="material-icons right">remove_red_eye</i>View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TodoShortSummary;
