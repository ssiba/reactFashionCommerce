/*
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

// greeting.test.js
const greeting = guest => "Hello, "+guest+"!";



const greeting2 = function (guest1,guest2) 
  {

    return(
  <>
  <div> Hello {guest1}</div>

   </>
    )
  }


//test suite
//soc=> testing 

/*
describe('greeting()', () => { // 1
  it('says hello',  () => { // 2

    
    
    //setTimeout(function(){

      console.log("says hello started")
      expect(greeting('coforge')).toBe('Hello, coforge!'); // 3
  

   

  }),
  it('doesnt render as expected', async () => { // 2

    
    console.log("doesnt render as expected started")
  
    expect(greeting('coforge2')).toBe('Hello, coforge2!'); 
    expect(greeting('coforge2')).not.toBe('Hello tinku!');  


  })


  
  
  
  




});

*/