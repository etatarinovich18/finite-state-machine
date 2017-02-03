class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.config = config;
        this.initial = this.config.initial;
        this.states = this.config.states;

        this.state = this.initial;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (state in this.states) {
            this.state = state;
        } else {
            throw new Error();
        }
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        var state = this.getState();

        if (this.states[state].transitions[event] in this.states) {
            this.state = this.states[state].transitions[event];
        } else {
            throw new Error();
        }
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.state = this.initial; 
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        var arrayOfStates = []; 

        if (arguments.length == 0) { 
            arrayOfStates = Object.keys(this.states); 
        } else { 
            var i = 0; 
            
            for (var key in this.states) { 
                if (event in this.states[key].transitions) { 
                    arrayOfStates[i] = key; 
                i++; 
                } 
            } 
        } 

        return arrayOfStates;
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
