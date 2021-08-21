'use strict';

const Stack = require('../index');

describe('stack', ()=> {
    it('Successfully push multiple values onto stack', ()=> {
        let stack = new Stack();
        stack.push(4);
        expect(stack.top).toEqual(4);
        stack.push(5);
        expect(stack.top).toEqual(5);
    });
    it('Successfully empty stack after multiple pops', ()=> {
        let stack = new Stack();
        stack.push(4);
        stack.push(5);
        stack.push(6);
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toEqual( true);
    });
    it('Peek returns last item stack', ()=> {
        let stack = new Stack();
        stack.push(4);
        expect(stack.peek()).toEqual(4);
        stack.push(5);
        expect(stack.peek()).toEqual(5);
    });
    it('Successfully push onto stack', ()=> {
        let stack = new Stack();
        stack.push(4);
        expect(stack.top).toEqual(4);
    });
    it('Successfully pop off stack', ()=> {
        let stack = new Stack();
        stack.push(4);
        stack.push(5);
        stack.push(6);
        expect(stack.pop()).toEqual(6);
        expect(stack.pop()).toEqual(5);
        expect(stack.pop()).toEqual(4);
    });
    it('Successfully instantiate an empty stack', ()=> {
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
        expect(stack.top).toBeNull();
    });
    it('Calling pop or peek on empty stack raises exception', ()=> {
        let stack = new Stack();
        let raises = stack.pop(); 
        expect(stack.raises).toEqual(undefined);  
    });
});