
var fullName = "Robert C. Peng";
var formattedName = HTMLheaderName.replace("%data%",fullName);
$("#header").prepend(formattedRole);

var desiredRole = "Software Engineer";
var formattedRole = HTMLheaderRole.replace("%data%", desiredRole);
$("#header").prepend(formattedName);


var Skills =  ["Python", "Ruby", "C", "Scheme", "Java"]

var bio = {
	"name" : "Robert Peng",
	"role" : "Software Engineer",
	"contact info" : {
		"mobile" : "(765)-543-7382",
		"email" : "RobertJustinianPeng@gmail.com",
		"github" : "https://github.com/RobcPeng",
		"twitter" : "https://twitter.com/pengchengyuan",
		"location" : "Kansas City",
	},
	"picture URL" : "noneyet",
	"welcome message" : "Hello!",
	"skills" : Skills,
	"bioPic" : "images/me.jpg"
};

var work = {
	"jobs" : [
	{
		"employer": "Cerner",
		"title" : "Software Engineer",
		"dates" : "2014-2014",
		"location" : "Kansas City, MO",
		"description" : [
			"Utilized Ruby skillset to develop Ruby-based software for internal use",
 			"Developed in a fast paced Agile environment",
 			"Leveraged software development tools such as Jira, Jenkins, and Crucible"]
	},
	{
		"employer": "Indiana University",
		"title" : "Peer Tutor",
		"dates" : "2013-2014",
		"location" : "Bloomington, IN",
		"description" : [
			"Successfully helped students on a weekly basis in understanding granular programming concepts",
			"Counseled students by advising on scheduling, University, and academic matters",
			"Reinforced students’ understanding of symbolic logic by making the coursework relevant to current technologies"]
	},
	{
		"employer": "Eli Lilly and Co.",
		"title" : "Intern",
		"dates" : "2011-2011",
		"location" : "Indianapolis, IN",
		"description" : [
			"Wrote internal articles focused technical information that was targeted towards non-technical employees of Lilly",
			"Created and edited several presentations that were presented at the Lilly Corporate Center Town Hall",
			"Worked on presentation material for Lilly’s United Way Campaign which helped Lilly raise $12.3 Million, surpassing Lilly’s Campaign goal"]
	},
	{
		"employer": "Purdue University",
		"title" : "Staff Photographer",
		"dates" : "2009-2011",
		"location" : "West Lafayette, IN",
		"description" : [
			"Produced over 100 photographs to be used on the newspaper",
			"Utilized Photoshop, Lightroom, and OSX to process hundreds of photographs for use"]
	}
	]
};

var projects = {


};

var education = {
	"schools" : [
	{
		"name": "Indiana University",
		"location" : "Bloomington, IN",
		"degree" : "B.A",
		"majors" : "Computer Science",
	},
	{
		"name": "Purdue University",
		"location" : "West Lafayette, IN",
		"majors" : "Communications",
	}
  ]
};

$("#")
//for skills tag
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(var i = 0 ; i < bio.skills.length ; i++){
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
	}
}

//for work experience tag
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle)

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	for (var i = 0 ; i < work.jobs[job].description.length ; i++) {
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[i]);
		$(".work-entry:last").append(formattedDescription);
	}
};