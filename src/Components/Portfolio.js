import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
      var projects= [
        {
          "title":"ConferKare",
          "category":"This is a cloud-based “Patient Record Management” Web Application that helps the patient to consult the doctor online.",
          "image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fsun%2F&psig=AOvVaw01aGEh9Z5I_vv-EKqTHe8S&ust=1632136520987000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCc4r_0ivMCFQAAAAAdAAAAABAD",
          "url":"https://www.conferkare.com"
        },
        {
          "title":"ConferClinic",
          "category":"This is a cloud-based “Clinic Management web application” which helps in maintaining day to day business activities of clinics.",
          "image":"../images/portfolio/conferclinic.jpg",
          "url":"http://www.conferclinic.com"
        },
        {
          "title":"ConferDr",
          "category":"This is a cloud-based “Doctor practice Management” Web Application which helps the doctors to manage their daily practices.",
          "image":"../images/portfolio/conferdr.jpg",
          "url":"http://www.conferdr.com"
        },
       
        {
          "title":"SimpleeLabs",
          "category":"official website of simpleelabs",
          "image":"../images/portfolio/simpleelabs.jpg",
          "url":"http://www.simpleelabs.com"
        }
      ];
      var projects = projects.map(function(projects){

        var projectImage = projects.image;
        //console.log(projectImage)
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage}/>
               {/* {console.log(projectImage)} */}
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
