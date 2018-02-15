/*  a reducer takes in to things:
1. the action (info about what happened)
2. copy of current state
*/

function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            console.log("incrementing likes");
            const i = action.index;
            return [
                ...state.slice(0,i), // everything before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1), // everything after the one we are updating

            ];
            //return the updated state
        default:
            return state;
    }
}

export default posts;