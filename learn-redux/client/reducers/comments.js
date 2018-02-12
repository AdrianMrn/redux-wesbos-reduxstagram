/*  a reducer takes in to things:
1. the action (info about what happened)
2. copy of current state
*/

function comments(state = [], action) {
    console.log("the comment will change");
    console.log(state, action);
    return state;
}

export default comments;