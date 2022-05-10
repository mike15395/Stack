//implementing stacks using arrays

class Stack{
    constructor() {
        this.array = []
        this.top = 0;
    }

    add(data) {
        this.array.push(data);
        this.top = this.top + 1;
        
    }

    isEmpty() {
        if (this.array.length === 0) {
            return true;
        }
        else {
            return false;
        }

    }

    remove() {
        if (this.isEmpty()) {
            console.log('Stack Empty');

        }
        else {
            this.array.pop();
            this.top = this.top - 1;
        }
    }

    display() {
        for (let index =0 ; index <this.array.length; index++) {
           console.log( this.array[index]);
        }
    }
}

let st = new Stack();
st.add(10);
st.add(20);
st.add(30);
st.add(40);

st.display();
st.remove();
st.remove();
st.display();
st.add(12);
st.add(14);
st.display();