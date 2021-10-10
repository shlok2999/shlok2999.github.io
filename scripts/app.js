const navslide = () =>{
	const bar=document.querySelector('.bar');
	const nav=document.querySelector('.navlinks');
	const navl=document.querySelectorAll('.navlinks li');
	bar.addEventListener('click',() =>{
		nav.classList.toggle('nav-active');
		//nav.classList.toggle('nav-inactive');
		//navl.animate({opacity: 1});
		
		//navl.forEach((link, index) => {
			//console.log(index/7);
		//	link.style.animation=`navLinkFade 0.5s ease fowards ${index/7}s`;				
		//});
			
	});

	
}

navslide();

var content=document.getElementById("content")



function home()
{
	return `<div class="home">
	<img class="photo" src="https://i.ibb.co/KxhXd9n/242327048-3079806958909843-8402013946793084809-n.png" alt="Profile">
	<h2>Shlok Bansal</h2>
	<h4>IIITH</h4>
	</div>
	<div class="home2">
	<p>I did my Btech in Computer Science From GGSIPU and currently pursuing Mtech from IIITH.All the links to respective colleges are given in education tab</h2>
	<p>I am little bit slow learner but i am always ready to learn new things. I pursuaded Mtech because I wanted to learn more about our field. I wanted to explore more domain of CSE.</p>
	<p>My hobbies are as follows</p>
	<ul>
	<li>I am huge manga fan and like to read as well.</li>
	<li>I like to watch animes</li>
	<li>I like to watch action movies</li>
	<li>I like to listen soft,romantic,encouranging songs</li>
	<li>I like to play story based pc/ps/xbox games</li>
	<li>I am fooball fan and I am a chelsea fan. I play as defender in local football team.</li>
	</ul> 
	</div> 
	`;
}

function contact()
{
	return `<div class="contacts">
			<div class="contact">
				<h2>My contact details are as follows</h2>
			</div>
			<div class="con">
			<div class="contact1">
				<p><strong>Shlok Bansal</strong></p>
				<p><strong>Email-id: shlok2999@gmail.com</strong></p>
				<p><strong>Email-id: shlok.bansal@students.iiit.ac.in</strong></p>
				<p><strong>Mobile: 7835858180</strong></p>
			</div>
			<div class="quer">
				<form>
					<label for="fname"><strong>Name:</strong></label><br>
					<input type="text" id="fname" name="fname"><br>
					<label for="email"><strong>Email id:</strong></label><br>
					<input type="text" id="email" name="email"><br>
					<label for="query"><strong>Query Type:</strong></label><br>
					<input type="text" id="query" name="query"><br><br>
					<input type="submit" value="Submit">
				</form>
			</div>
			</div>
			</div>`;
}

function skills()
{
        return `<div class="tables">
		<table>
		<tr>
			<th colspan="2">Skills</th>
		</tr>
		<tr>
			<td style="width:20%">C++</td>
			<td>
				<div class="slide1"></div>
			</td>
		</tr>
		<tr>
			<td>Python</td>
			<td><div class="slide2"></div></td>
		</tr>
		<tr>
			<td>SQL</td>
			<td><div class="slide3"></div></td>
		</tr>
	</table>
	</div>`;
		
}

function education()
{
	return `<div class="cards">
				<div class="card" onclick="iiit()">
					<img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/International_Institute_of_Information_Technology%2C_Hyderabad_logo.png/260px-International_Institute_of_Information_Technology%2C_Hyderabad_logo.png" alt="iiit" height="100px">
					<div class="container">
	  				<h4><b>IIIT Hyderabad</b></h4>
	  			<p>Mtech(CSE)</p>
			</div>
  		</div>
		<div class="card" onclick="ipu()">
		  <img src="http://www.ipu.ac.in/style/head_foot_img/220px-Guru_Gobind_Singh_Indraprastha_University12.png" alt="ipu" height="100px" >
		  <div class="container">
			<h4><b>Guru Gobind Singh Indraprastha University</b></h4>
			<p>Btech(CSE)</p>
		  </div>
		</div>
		<div class="card" onclick="sms()">
		  <img src="https://www.saintmarksschool.com/meerabagh/images/home/logo_sms.jpg" alt="Avatar" height="100px" >
		  <div class="container">
			<h4><b>St. Marks Senior Secondary Senior School</b></h4>
			<p>School(10th and 12th)</p>
		  </div>
		</div>
		<div class="card" onclick="resume()">
		  <img src="https://play-lh.googleusercontent.com/nufRXPpDI9XP8mPdAvOoJULuBIH_OK4YbZZVu8i_-eDPulZpgb-Xp-EmI8Z53AlXHpqX" alt="Avatar" height="100px" >
		  <div class="container">
			<h4><b>My Resume</b></h4>
		  </div>
		</div>   
			</div>`;
}
var time=document.getElementById("time");
const onl = () =>{
	setInterval(() => {
		var newdate=new Date();
		time.innerHTML=newdate;
	}, 1000);
	navigator(0);
}


const navigator = (option) => {
	if(option==0)
	{
		content.innerHTML=home.call();
	}
	else if(option==1)
	{
		content.innerHTML=education.call();
	}
	else if(option==2)
	{
		content.innerHTML=skills.call();
	}
	else if(option==3)
	{
		content.innerHTML=contact.call();
	}
}

function iiit()
{
	window.location.href="https://www.iiit.ac.in";
}


function ipu()
{
	window.location.href="http://ipu.ac.in";
}

function sms()
{
	window.location.href="https://www.saintmarksschool.com/meerabagh/";
}

function resume()
{
	window.location.href="https://drive.google.com/file/d/1y5fAFcP6vsZNw3WOZUNBJT4DeZFn04-d/view?usp=sharing";
}