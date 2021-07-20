import { postComponent } from './postComponent';

describe('Post Component', () => {
     let component:postComponent;
    //only once
    //befor -> setup
    //after -> teardown
    beforeAll(()=>{

    });

    afterAll(()=>{
        component=null;
    });
    
    // every time for a spec
    beforeEach(()=>{
       //Arrange
    component = new postComponent();
    component.totalLikes = 3;
    });
    // let component = new postComponent();
    // component.totalLikes = 3;
   
    it('Should increase likes', () => {
        //act
        component.like();
        expect(component.totalLikes).toContain(4)
    });
    it('Should decrease likes', () => {
        component.dislike();
        expect(component.totalLikes).toContain(3)
    });
});