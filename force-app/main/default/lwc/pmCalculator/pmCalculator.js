/**
 * Created by bjohnson on 2/7/20.
 */

import { LightningElement, track } from 'lwc';

export default class PmCalculator extends LightningElement {
@track mostLikely;
@track leastLikely;
@track bestCase;
@track estimate = 0.0;

handleChange(event){
    console.log(event.target.name);
    console.log(event.target.value);
    if (event.target.name){}
}

calculate(){

}
clear(){
    this.mostLikely = 0.0;
    this.leastLikely = 0.0;
    this.bestCase = 0.0;
    this.estimate = 0.0;
}
renderedCallback() {
    //super.renderedCallback();
    //this.template.querySelector(`[data-id="${worstCase}"]`).focus()
}

}