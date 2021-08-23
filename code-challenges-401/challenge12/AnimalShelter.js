'use strict';

const Queue=require('../stack-and-queue/queue');

class AnimalShelter{
    constructor(){
        this.preCat=new Queue();
        this.preDogs=new Queue();
    }
    enqueue(animals ){
        if(animals.type==='cat'){
            this.preCat.enqueue(animals);
        }else if(animals.type==='dog'){
            this.preDogs.enqueue(animals);
        }else{
            return'It is gonna be cat or dog';
        }
    }
    dequeue(pre){
        if(pre ==='cat'){
            if(!this.preCat.isEmpty()){
                return this.preCat.dequeue(pre);
            }else{
                return 'It is gonna be cat place hold empty';
            }
            }else if(pre ==='dog'){
                if(!this.preDogs.isEmpty()){
                    return this.preDogs.dequeue(pre);
                }else {
                    return 'It is gonna be dog place hold empty';
                }
                } else {
                    return null;
                }        
            }
}

module.exports =AnimalShelter;
