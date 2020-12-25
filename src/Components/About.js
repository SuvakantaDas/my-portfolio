import React, { Component } from 'react';

class About extends Component {
  render() {

    
      var name = 'Suvakanta Das';
      var profilepic= "images/shubhaprofilepic.jpg";
      var bio = 'I am Suvakanta Das, people call me Shubha.I am a programmer, lyricist,music lover and experimental cook. I would like to experiment on my life, food and coding.';
      var street = 'Nayapalli';
      var city = 'Bhubaneswar';
      var state = 'Odisha';
      var zip = '751015';
      var phone= '+91-7504128663';
      var email = 'suvakantadas@outlook.com';
      var resumeDownload = this.props.data.resumedownload;
      var SuvakantaDasresumeDownload = this.props.data.SUVAKANTA_DAS_RESUME;
    

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Suvakanta Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
              {/*  <div className="columns download">
                  <p>
                     <a href={SuvakantaDasresumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div> */}
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
