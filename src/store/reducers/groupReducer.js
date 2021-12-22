const initState = {};

const groupReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_GROUP":
            console.log("created group", action.group);
            return state;
        case "CREATE_GROUP_ERROR":
            console.log("create group error", action.err);
            return state;
        case "DELETE_GROUP":
            console.log("deleted group", action.group);
            return state;
        case "DELETE_GROUP_ERROR":
            console.log("delete group error", action.err);
            return state;
        case "JOIN_GROUP":
            console.log("joined group", action.group);
            return state;
        case "JOIN_GROUP_ERROR":
            console.log("join group error", action.err);
            return state;
        case "REMOVE_GROUP":
            console.log("remove group", action.group);
            return state;
        case "REMOVE_GROUP_ERROR":
            console.log("remove group error", action.err);
            return state;


        default:
            return state;
    }
};

export default groupReducer;
