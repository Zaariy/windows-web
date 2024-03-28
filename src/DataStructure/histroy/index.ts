import {NodeFolder} from "../virtualFileSysTree/type";
interface State {
    data: NodeFolder
}

export class HistoryManager {
    private states: State[] = [];
    private currentIndex: number = -1;

    public addState(state: State): void {
        // Check if the state already exists in history
        if (this.states.some(s => s.data === state.data)) {
            console.log("State already exists in history. Not adding.");
            return;
        }
        
        // Discard any forward history
        this.states.splice(this.currentIndex + 1);
        this.states.push(state);
        this.currentIndex++;
    }    

    public goBack(): State | null {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.states[this.currentIndex];
        } else {
            return null; // No more history to go back
        }
    }

    public goForward(): State | null {
        if (this.currentIndex < this.states.length - 1) {
            this.currentIndex++;
            return this.states[this.currentIndex];
        } else {
            return null; // No more history to go forward
        }
    }
}

