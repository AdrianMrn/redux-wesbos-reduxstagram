/*  a reducer takes in 2 things:
1. copy of current state
2. the action (info about what happened)
*/

function postComments(state = [], action) {
    switch(action.type){
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }]
        case 'REMOVE_COMMENT':
            [...state.splice(action.i, 1)]
            return [
                /* ...state.slice(0,action.i),
                ...state.slice(action.i + 1) */
                ...state
            ]
        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            // take current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;