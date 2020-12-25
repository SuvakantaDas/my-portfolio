import React, { Component } from 'react';

class Header extends Component {
  render() {

    
      var name = 'Suvakanta Das';
      var occupation= 'Full Stack Developer';
      var description= 'experience in all aspects of the software development life cycle, including requirements analysis, design, development and testing. I am a supportive and enthusiastic team player dedicated to streamlining the processes and efficiently resolving project issues. Willing to learn and master Single Page Application';
      var city= 'Bhubaneswar';
      var social= [
         {
           "name":"linkedin",
           "url":"https://www.linkedin.com/in/suvakanta-das/",
           "className":"fa fa-linkedin"
         },
         {
           "name":"github",
           "url":"https://github.com/SuvakantaDas",
           "className":"fa fa-github"
         },
         {
           "name":"skype",
           "url":"https://join.skype.com/invite/YgruJXhT0Nau",
           "className":"fa fa-skype"
         },
         {
           "name":"stackoverflow",
           "url":"https://stackoverflow.com/users/8736056/suvakanta-das",
           "className":"fa fa-stack-overflow"
         },
         {
           "name":"twitter",
           "url":"https://twitter.com/SuvakantDas",
           "className":"fa fa-twitter"
         },
         {
           "name":"facebook",
           "url":"https://www.facebook.com/savakanta.das/",
           "className":"fa fa-facebook"
         }
       ];
      var networks= social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
      })
   

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
           {/*  <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}</h1>
            <h3>I'm a <span>{occupation},</span> {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
