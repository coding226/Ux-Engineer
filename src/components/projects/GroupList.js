import React, {useEffect, useState} from "react";

import GroupSummary from "./GroupSummary";
import TodoShortSummary from "./TodoShortSummary";
import {firestore} from "firebase";


function useGroupList(user, groups) {
    const [sameGroupUsers, setSameGroupUsers] = useState([]);
    useEffect(() => {
        firestore()
            .collection('users')
            .doc(`${user.uid}`)
            .onSnapshot(snapshot => {
                let data = snapshot.data();
                setSameGroupUsers([]);
                let temp_data = [];
                console.log(data.groups);
                if (data.groups.length > 0) {
                    firestore()
                        .collection('users')
                        .where('groups', 'array-contains-any', data.groups)
                        .onSnapshot(snapshot => {
                            snapshot.docs.map(x => x.id).map(item => temp_data.push(item));
                            setSameGroupUsers(temp_data)
                        })
                }
            });
    }, [user, groups])
    return sameGroupUsers;
}


const GroupList = ({groups, actions, todos, user, notifications}) => {

    const sameGroupUsers = useGroupList(user, groups);

    function toggle() {
        document.getElementById('dropdownMenu').classList.toggle('show')
    }

    return (
        <div className="w-100">
            <div className="dropdown w-100">
                <button onClick={toggle} className="btn btn-secondary dropdown-toggle w-100"
                        type="button">
                    Join Group
                </button>
                <div className="dropdown-menu w-100" id="dropdownMenu">
                    {
                        groups &&
                        groups
                            .map((group) => {
                                return (
                                    <div className="dropdown-item" key={group.id}>
                                        <GroupSummary group={group} user={user.uid} actions={actions}/>
                                    </div>
                                );
                            })
                    }
                </div>
            </div>
            {
                todos &&
                todos.filter(todo => sameGroupUsers.includes(todo.authorId))
                    .map((todo) => {
                        return (
                            <div key={todo.id}>
                                <TodoShortSummary todo={todo} actions={actions}/>
                            </div>
                        );
                    })
            }
        </div>
    );
};

export default GroupList;
