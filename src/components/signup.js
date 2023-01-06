import React from 'react'
import '../styles/Signup.css'
function onClickButton(event) {
    event.preventDefault();
  }
  
  function Signup() {
    return (
        <div>
         <form action='http://localhost:3011/user' method='post'>
<label className='Fname-label' htmlFor='first_name'>First Name<br></br></label>
<input className='fname' type="text" name="first_name"  placeholder='enter your firstname' required/>
<hr className='fline'></hr>

<label className='Lname-label' htmlFor='last_name'>Last Name<br></br></label>
<input className='lname' type="text" name="last_name"  placeholder='enter your lastname' required/>
<hr className='lline'></hr>

<label className='Email-label' htmlFor='email'>Email id<br></br></label>
<input className='email' type="text" name="email"  placeholder='enter your email id' required/>
<hr className='fline'></hr>

<label className='Age-label' htmlFor='age'>Age<br></br></label>
<input className='age' type="number" name="age"  placeholder='enter your age'/>
<hr className='ageline'></hr>

<label className='height-label' htmlFor='height'>Height<br></br></label>
<input className='height' type="number" name="height"  placeholder='enter your height in m' />
<hr className='heightline'></hr>

<label className='weight-label' htmlFor='weight'>Weight<br></br></label>
<input className='weight' type="number" name="weight"  placeholder='enter your weight in  kgs' />
<hr className='weightline'></hr>

<label className='genderlabel' htmlFor='gender'>Gender<br></br></label>
<select className='Gender' name='gender' id='gender' required>
    <option className='select1'  value="">Select Gender</option>
    <option className='select' value="MALE">MALE</option>
    <option className='select' value="FEMALE">FEMALE</option>
</select>
<hr className='genderline'></hr>
          <button type="submit" className='submit-button'>
            Submit
          </button>
         </form>
        </div>
    );
  }

export default Signup
