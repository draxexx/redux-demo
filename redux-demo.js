// import redux
const redux = require("redux");

// reducer function
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === "increment"){
        return {
            counter: state.counter + 1,
        };
    }

    if(action.type === "decrement"){
        return {
            counter: state.counter - 1,
        };
    }

    return state;
};

// create a store
const store = redux.createStore(counterReducer);

const counterSubscriber = () => { 
    // gets the latest snaphot after it was changed
    const latestState = store.getState();
    console.log(latestState);
};

// works whenever data has changed
store.subscribe(counterSubscriber);


store.dispatch({
    type: "increment",
});

store.dispatch({
    type: "decrement",
});