import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
        
    <div className='landing' >
        
       
        <p>
           
            &emsp;<span className='para'>Hello , if you are looking for a friend you come to the right<br/></span>

            &emsp;&emsp;<span className='para'>place in this website you will found what you are looking<br/></span>

            &emsp;&emsp;&emsp;&emsp;<span className='para'>for,we have multiple choices from top breeds to<br/></span>

            &emsp;&emsp;&emsp;&emsp;&emsp;<span className='para'>best toys for your animals. you can found<br/></span>

            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='para'>vets and specialist on our website<br/></span>

            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span className='para'>to help your with your pet</span>
            </p>
        
         

          <span className='btnss'> <Link to="login"> <button className="button-85" role="button">Log in</button></Link>
           
           <Link to="register"> <button className="button-85" role="button">register</button></Link></span>
 
  </div>
 
  </div>
  )
}

export default LandingPage