import React, { Component } from 'react';

class Footer extends Component {
  render() {

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
      var networks=social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2021 Suvakanta Das </li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
