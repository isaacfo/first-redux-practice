

// 1. write out an example/default version of my application state

const defaultState = {
    count: 0   
}

// 2. Describe the ways state can change 
// count can go up by one or down by one 

// 2b. find single words or short phrases for those changes 
// increment
// decrement 

// 2c. translate those into objects 

// Also good to all-caps the variable for an action
const ACTION_INC = {
    type: 'INCREMENT'   // common to uppercase type
};

const ACTION_DEC = {
    type:'DECREMENT'
};

// 3. Write a a pure fucntion that accepts the current state and an action, then returns the new version state

const counter = (state=defaultState, action) => {
    // check the action.type
    switch(action.type) {
        // if (action.type === ACTION.INC.type {}
        case ACTION_INC.type:
    // if its 'INCREMENT', return a new state object with the count +1
            return {
                count: state.count + 1
            };
            // break; // no need to break, since we are returning
        
    
    
        case ACTION_DEC.type:
    // if its 'DECREMENT', return a new state object with the count -1
            return {
                count: state.count -1
            };


        default:
    // else return the state as-is
            ruturn: state;
    }

}
