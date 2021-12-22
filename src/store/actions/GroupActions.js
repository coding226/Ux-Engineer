export const createGroup = (group) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore
            .collection('groups')
            .add({
                ...group,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
                createdAt: new Date(),
                users: []
            })
            .then(() => {
                dispatch({type: "CREATE_GROUP", group});
            })
            .catch((err) => {
                dispatch({type: "CREATE_GROUP_ERROR", err});
            });
    };
};

export const deleteGroup = (group) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore
            .collection('groups')
            .doc(`${group}`)
            .delete()
            .then(() => {
                dispatch({type: "DELETE_GROUP", group});
            })
            .catch((err) => {
                dispatch({type: "DELETE_GROUP_ERROR", err});
            });
    };
};


export const joinGroup = (group) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        let users = [];
        let groups = [];
        firestore
            .collection("users")
            .doc(authorId)
            .get()
            .then((doc) => {
                groups = doc.data()['groups'];
                groups.push(group);
            });

        firestore
            .collection('groups')
            .doc(`${group}`)
            .get()
            .then((doc) => {
                users = doc.data()['users'];
                users.push(authorId);
            })
            .then(() => {
                firestore
                    .collection("users")
                    .doc(authorId)
                    .update({groups}).then(() => {
                    firestore
                        .collection('groups')
                        .doc(`${group}`).update({users}).then(() => {
                        dispatch({type: "JOIN_GROUP", group});
                    })
                });
            })
            .catch((err) => {
                dispatch({type: "JOIN_GROUP_ERROR", err});
            });
    };
};


export const removeGroup = (group) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        let users = [];
        let groups = [];
        firestore
            .collection("users")
            .doc(authorId)
            .get()
            .then((doc) => {
                groups = doc.data()['groups'];
                groups = groups.filter(user => user !== group);
            });
        firestore
            .collection('groups')
            .doc(`${group}`)
            .get()
            .then((doc) => {
                users = doc.data()['users'];
                users = users.filter(user => user !== authorId);
            })
            .then(() => {
                firestore
                    .collection("users")
                    .doc(authorId)
                    .update({groups}).then(() => {
                    firestore
                        .collection('groups')
                        .doc(`${group}`).update({users}).then(() => {
                        dispatch({type: "REMOVE_GROUP", group});
                    })
                })
            })
            .catch((err) => {
                dispatch({type: "REMOVE_GROUP_ERROR", err});
            });
    };
};
