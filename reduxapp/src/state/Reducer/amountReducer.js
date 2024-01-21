const useReducer = (state = 0, action) => {
    if (action.type === 'withdraw') {
        return state - action.payload;
    }
    else if (action.type === 'deposite') {
        return state + action.payload;
    }
    else return state;
}

export default useReducer;

// reducer is pure f() which takes previous state and action and return the new state
// reducer can be more than 1