import React, { Component } from 'react';

class Resume extends Component {
  render() {

   
      var skillmessage = 'Skills & Competencies';
      var educations=[
        {
          "school":"Orissa Engineering College, Bhubaneswar under BPUT University",
          "degree":"B.Tech in Computer Science and Engineering",
          "graduated":"June 2016",
          "description":""
        },
        {
          "school":"B.Mohavidyalaya, Jajpur affiliated to CHSE board",
          "degree":"Intermidiate",
          "graduated":"May 2011",
          "description":""
        },
        {
          "school":"Samareswar Bidyapitha, Jajpur affiliated to BSE",
          "degree":"High School",
          "graduated":"May 2009",
          "description":""
        }
      ];
      

     var education = educations.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      });
      work=[
        {
          "company":"SimpleeKare",
          "title":"Full Stack Developer ",
          "years":"March 2018 - Present",
          "description":"I am working as a full stack developer (Front End, Back End, Middleware) which includes below points."
        },
        {
          "company":"SimpleeKare",
          "title":"Software Developer Intern",
          "years":"December 2017 - February 2018",
          "description":"Worked in a team with senior developers to develop a Pathology Lab Management Web Application."
        }
      ]
      ;
      var work = work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })

      skills=[
        {
          "name":"ReactJS",
          "level":"50%"
        },
        {
          "name":"Redux",
          "level":"40%"
        },
        {
          "name":"HTML",
          "level":"70%"
        },
        {
          "name":"CSS",
          "level":"65%"
        },
        {
          "name":"JavaScript",
          "level":"50%"
        },
        {
          "name":"Bootstrap",
          "level":"70%"
        },
        {
          "name":"PHP",
          "level":"80%"
        },
        {
          "name":"MySQL",
          "level":"70%"
        },
        {
          "name":"RESTful API",
          "level":"80%"
        },
        {
          "name":"Amazon Web Services(AWS)",
          "level":"40%"
        },
        {
          "name":"POSTMAN",
          "level":"85%"
        }
      ];
      var skills = skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
  

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
