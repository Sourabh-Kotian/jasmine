import { greet } from "./myFunctions";

describe('My Functions', ()=>{
    it('should greet', ()=>
    {
        const result=greet('my name');
        expect(result).toContain('hi my name');
    })
})