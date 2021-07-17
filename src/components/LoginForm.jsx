/*import React from 'react';
import "./LoginForm.css";



export default function LoginForm() {


	
// const inputs = document.querySelectorAll(".input");


// function addcl(){
// 	let parent = this.parentNode.parentNode;
// 	parent.classList.add("focus");
// }

// function remcl(){
// 	let parent = this.parentNode.parentNode;
// 	if(this.value == ""){
// 		parent.classList.remove("focus");
// 	}
// }


// inputs.forEach(input => {
// 	input.addEventListener("focus", addcl);
// 	input.addEventListener("blur", remcl);
// });


function toCheck(){

	// if(document.getElementById('student').value=="student"){
    //     toStudent();
	// }else if(document.getElementById('teacher').value=="teacher"){
	// 	toTeacher();
	// }else{
	// 	toAdmin();
	// }
	console.log(document.getElementById('student'))
	
}

  return (
    <div>
      <img class="wave" src="https://github.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true" />
	<div class="login-container">
		<div class="img">
			<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg" />
		</div>
		<div class="login-content">
			<form action="index.html">
				<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" />
				<h2 class="title">Welcome</h2>
				<div>
           		    	<h5>Choose one...</h5>
					  <input type="radio" id="admin" name="role" value="admin"/>
                      <label for="admin">Admin</label>
                      <input type="radio" id="student" name="role" value="student"/>
                      <label for="student">Student</label>
					  <input type="radio" id="teacher" name="role" value="teacher"/>
                      <label for="teacher">Teacher</label>
            	   </div>
				   <br/>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>


           		   <div class="div">
           		   		<h5>Username</h5>
           		   		<input type="text" class="input" />
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" class="input" />
            	   </div>
            	</div>
            	<a class = "log" href="/">Forgot Password?</a>
            	<input type="submit" class="btn-log" value="Login" />


{/* Add a simple button(not bootstrap's one) here by which I can invoke toCheck function above like }*/
	
/*<button onClick={toCheck}>Demo</button>


            </form>
        </div>
    </div>
    </div>
  );
}*/



import React from 'react'

function LoginForm() {
	return (
		<div>

		<form>

		<p>
		  <input type= "radio" />
			<label>Student</label>
			<input type= "radio" />
			<label>Teacher</label>
			<input type= "radio" />
			<label>Admin</label>
		</p>
		
		  
		 <p>
		 <label>Email:</label>
			<input type= "email" />
		 </p> 
			
			
			<label>Password:</label>
			<input type= "password" />
			<p>
			<button>Login</button>
			</p>
			
		</form>
			
		</div>
	)
}

export default LoginForm;