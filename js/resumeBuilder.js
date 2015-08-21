var formattedName = HTMLheaderName.replace("%data%", "Eystein Alnaes");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-end developer");

$("#header").prepend(formattedRole).prepend(formattedName);

/*
* Four JSON objects
*  education{}
*  work{}
*  projects{}
*  bio{}
*/


// Object with array with two objects - schools and onlineCourses
var education = {
  "schools" : [
   {
      "name" : "UiO",
      "location" : "Oslo",
      "degree" : "IT",
      "majors" : ["nothing"],
      "dates" : "1998-1999",
      "url" : "http://uio.no"
   },
   {
      "name" : "ECU",
      "location" : "Perth",
      "degree" : "Bachelor of Communications",
      "majors" : ["Interactive Multimedia", "Film and Video"],
      "dates" : "2001-2004",
      "url" : "http://ecu.com.au"
   }
  ],
  "onlineCourses" : [
    {
      "title" : "Smacss",
      "school" : "Jonathan Snook",
      "dates" : "July 2015",
      "url" : "http://snook.ca"
    },
    {
      "title" : "Javascript",
      "school" : "Udacity",
      "dates" : "August 2015",
      "url" : "https://www.udacity.com"
    }
  ]
}

var work = {
  "jobs" : [
    {
      "employer" : "Self-employed",
      "title" : "Freelance web consultant",
      "location" : ["Australia", "France", "Norway"],
      "dates" : "2008 - 2015",
      "description" : "Contracting front-end developer for medium and large firms"
    },
    {
      "employer" : "Creuna",
      "title" : "Front-end developer",
      "location" : "Norway",
      "dates" : "2007 - 2008",
      "description" : "HTML, CSS and Mootools javascript library"
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "laks.no",
      "dates" : "Aug-Nov 2015",
      "description" : "Animated website with lottery app",
      "images" : ["images/197x148.gif","images/197x148.gif"]
    },
    {
      "title" : "eltekholding.no",
      "dates" : "Jun-Aug 2015",
      "description" : "One pager website with parallax and fullpage slides",
      "images" : ["images/197x148.gif"]
    }
  ]
}

 // Declares a object with key-value pairs
var bio = {
  "name" : "Eystein Alnaes",
  "role" : "Web developer",
  "contacts" : {
    "mobile" : "+47 406 74 098",
    "email" : "info@example.no",
    "github" : "eystein",
    "twitter" : "@iceMagic",
    "location" : "Chamonix"
  },
  "welcomeMessage" : "Caring about usablity",
  "skills" : [
    "CSS", "UX", "JavaScript", "CSS3 animation"
  ],
  "bioPic" : "https://pbs.twimg.com/profile_images/1794315645/L1040675_400x400.JPG"
}


bio.display = function() {
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedContacts =
    formattedTwitter +
    formattedGithub +
    formattedLocation;
  $("#topContacts").append(formattedContacts);
  $("#footerContacts").append(formattedContacts);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMessage);
}
bio.display();
/*
## For-In Loops ##

[1.] Iterate over all the jobs in the work object. Variable can be anything, so I choose 'job'.
[2.] Append a new HTMLworkStart for each one
[3.] Format each job's employer with HTMLworkEmployer
[4.] Format each job tiltle with HTMLworkTitle
[5.] Contantates employer and title each
[6.] .append contantecated to work-entry:last
*/

work.display = function() {
  for (var job in work.jobs) {                                                             /* [1.] */
    $("#workExperience").append(HTMLworkStart);                                         /* [2.] */
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer); /* [3.] */
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);          /* [4.] */
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    var formattedJob =
      formattedEmployer +
      formattedTitle +
      formattedLocation +
      formattedDates +
      formattedDescription;                                                             /* [5.] */
    $(".work-entry:last").append(formattedJob);                                        /* [6.] */
  }
}

work.display();

// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// });

function locationizer(work_object) {
  var locationsArray = [];

  for (var job in work_object.jobs) {
    var newLocation = work_object.jobs[job].location;
    locationsArray.push(newLocation);
  }

  return locationsArray;
}
// console.log(locationizer(work));



/* Change "sebastian thrun" into "Sebastian THRUN" */
function inName() {
  /* var name = window.name; */ /* Gives comma-separated array */
  /*  var name = bio.name;   */ /* bio.name gives space-separated array */

  var name = bio.name.trim().split(" "); // Turn into an array ["AlbERt" "EINstEiN"]. Trim off whitespace.
  console.log("name: " + name);
  var firstName = name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase(); // Get and change the first name;
  var lastName = name[1].toUpperCase(); // Get and change the last name;
  console.log("firstName: " + firstName);
  console.log("lastName: " + lastName);
  var oldSpelling = $('#name').text();
  var newSpelling = firstName + " " + lastName;
  $('#name').text( newSpelling );
  console.log(newSpelling);
}

$("#main").prepend(internationalizeButton);

$("#mapDiv").append(googleMap);

/* Encapsulate a function as a method of an object */
/* Create "display" as a method of the "projects" object */
projects.display = function() {
  for (var project in projects.projects ) {
    $("#projects").append(HTMLprojectStart);

    var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(projectTitle);
    var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(projectDates);
    var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(projectDescription);

    if (projects.projects[project].images != 0) {
      for (image in projects.projects[project].images) {
        var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(projectImage);
      }
    }
  }
}

projects.display();

bio.display = function() {
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
  }
}

bio.display();




