import './LandingPage.css'

const LandingPage=() =>{
    return(
        <>
  <div id="mistake_cover" />
  <div className="parallax">
    <div id="group1" className="parallax__group">
      <div className="parallax__layer parallax__layer--base">
        <div id="Title" style={{left: '6%', top: '30%'}}><h1>Compound It!</h1></div>
        <div style={{fontSize: '150%', color: 'white', position: 'absolute', top: '5%', left: '80%'}}><a href="#scroller">Features</a></div>
        <div style={{fontSize: '150%', color: 'white', position: 'absolute', top: '5%', left: '70%'}}><a href="#">Support</a></div>
        <div style={{color: 'white', position: 'absolute', top: '75%', left: '70%'}}><span>An application where the user can cut down the usage of specified websites by selecting a mode that helps him to focus on what actually matters. You can just specify the schedule and websites so that the user couldn't access those websites during that particular period of time. It helps you to track your stats like time spent on various technical activities, hobbies, or work. You can connect with others and see what they are working on.</span></div>
      </div>
      <div className="parallax__layer parallax__layer--deep">
        <div id="animations" className>
          <div id="circle1" className="circle" />
          <div id="circle2" className="circle" />
          <div id="circle3" className="circle" />
          <div id="half_circle1" className="half_circle" />
          <div id="half_circle2" className="half_circle" />
        </div>
      </div>
    </div>
    <div id="group2" className="parallax__group">
      <div className="parallax__layer parallax__layer--base">
        <div id="scroller">
          <button id="Loign_user" className="button"><span>Loign</span></button>
          <button id="Signup_user" className="button"><span>Signup</span></button>
          {/* <div style={{fontSize: '200%', color: '#3098f3', position: 'absolute', top: '3%', left: '5%'}}>Features</div> */}
          <span className="features" style={{fontSize: '150%',top: '15%', left: '5%'}}>This site will automatically block the entertainment and any other websites</span>
          <span className="features" style={{fontSize: '150%',top: '45%', left: '5%'}}>The activities of the user are logged</span>
          <span className="features" style={{fontSize: '150%',top: '75%', left: '5%'}}>Generates the reports of the activities that are logged</span>
        </div>
        <div className="container">
          <div className="card">
            <div className="icon">
              <span style={{fontSize: '100%'}}>1</span>
            </div>
            <div className="snapshot"><br /><br /><br />Website Blocking</div>
          </div>
          <div className="card">
            <div className="icon">
              <span style={{fontSize: '100%'}}>2</span>
            </div>
            <div className="snapshot"><br /><br /><br />Activity Log</div>
          </div>
          <div className="card">
            <div className="icon">
              <span style={{fontSize: '100%'}}>3</span>
            </div>
            <div className="snapshot"><br /><br /><br />Reports Generating</div>
          </div>
        </div>
      </div>
    </div>
    {/* <div id="group3" class="parallax__group">
<div class="parallax__layer parallax__layer--base">
  <div id="garage_login">
    <h1 id="garage_heading">Are you a garage owner then here <br>you go!</h1>
    <button id="Loign_garage" class="button"><span>Loign</span></button>
    <button id="Signup_garage" class="button"><span>Signup</span></button>
    <div style="font-size: 200%; color: white; position: absolute; top: 3%; left: 45%;">Features</div>
    <span class="features" style="top: 15%;color: white;">You can accept and update the status of the repairs you<br>are going through</span>
    <span class="features" style="top: 45%; color: white;">You can edit your garage profile and make changes like<br>location,timing etc</span>
    <span class="features" style="top: 75%; color: white;">You can browse the history of repairs done though our site<br>and check details of that repair</span>
  </div>
  <div class="container">
    <div class="card">
      <div class="icon">
        <span style="font-size: 100%;">1</span>
      </div>
    <div class="snapshot"><br><br><br>Repair Handling</div>
  </div>
  <div class="card">
    <div class="icon">
      <span style="font-size: 100%;">2</span>
    </div>
  <div class="snapshot"><br><br><br>Manage Profile</div>
  </div>

  <div class="card">
    <div class="icon">
      <span style="font-size: 100%;">3</span>
    </div>
  <div class="snapshot"><br><br><br>Repair History</div>
</div>
    </div> */}
  </div>
</>


    );
}

export default LandingPage;