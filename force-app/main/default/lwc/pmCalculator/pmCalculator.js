/**
 * Created by bjohnson on 2/7/20.
 */

import { LightningElement, track } from 'lwc';

export default class PmCalculator extends LightningElement {
@track mostLikely;
@track pessimistic;
@track optimistic;
@track estimate = 0.0;

handleChange(event){
    console.log(event.target.name);
    console.log(event.target.value);
    if (event.target.name === "mostLikely"){
        this.mostLikely = event.target.value;
        console.log(this.mostLikely)
    }else if (event.target.name === "pessimistic"){
        this.pessimistic = event.target.value;
        console.log(this.pessimistic);
    }else {
        this.optimistic = event.target.value;
        console.log(this.optimistic);
    }
}

calculate(){
    this.estimate = parseFloat((this.optimistic + (4*this.mostLikely) + this.pessimistic) / 6);
    console.log(this.optimistic);
    console.log(this.mostLikely * 4);
    console.log(this.pessimistic);
    console.log(this.estimate / 6);

}
clear(){
    this.mostLikely = 0.0;
    this.pessimistic = 0.0;
    this.optimistic = 0.0;
    this.estimate = 0.0;
}

}