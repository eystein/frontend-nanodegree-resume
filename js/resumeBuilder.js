/*
* Four JSON objects
*  education{}
*  work{}
*  projects{}
*  bio{}
*/


// Object with array with two objects.
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
      "images" : ["https://mikespennyforyourthoughts.files.wordpress.com/2011/03/mjm09_wireframe_2.jpg", "http://www.smartz.com/s/RRTgEbfGMEKV0KDYARmaNw/turn-wireframe.jpg"]
    },
    {
      "title" : "eltekholding.no",
      "dates" : "Jun-Aug 2015",
      "description" : "One pager website with parallax and fullpage slides",
      "images" : ["https://mikespennyforyourthoughts.files.wordpress.com/2011/03/mjm09_wireframe_2.jpg", "http://www.smartz.com/s/RRTgEbfGMEKV0KDYARmaNw/turn-wireframe.jpg"]
    }
  ]
}

 // Declares a object with key-value pairs
var bio = {
  "name" : "Eystein Alnaes",
  "role" : "Web developer",
  "contacts" : {
    "mobile" : "+47 406 74 098",
    "email" : "eystein@eystein.no",
    "github" : "eystein",
    "twitter" : "iceMagic",
    "location" : "Chamonix"
  },
  "welcomeMessage" : "Caring about usablity",
  "skills" : [
    "CSS", "UX", "JavaScript", "CSS3 animation"
  ],
  "bioPic" : "https://pbs.twimg.com/profile_images/1794315645/L1040675_400x400.JPG"
}

/*
## For-In Loops ##

[1.] Iterate over all the jobs in the work object. Variable can be anything, so I choose 'job'.
[2.] Append a new HTMLworkStart for each one
[3.] Format each job's employer with HTMLworkEmployer
[4.] Format each job tiltle with HTMLworkTitle
[5.] Contantates employer and title each
[6.] .append contantecated to work-entry:last
*/

function displayWork() {
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

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function locationizer(work_object) {
  var locationsArray = [];

  for (var job in work_object.jobs) {
    var newLocation = work_object.jobs[job].location;
    locationsArray.push(newLocation);
  }

  return locationsArray;
}
console.log(locationizer(work));


$("#main").prepend(internationalizeButton);