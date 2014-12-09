
var fullName = "Robert C. Peng";
var formattedName = HTMLheaderName.replace("%data%",fullName);
$("#header").prepend(formattedRole);

var desiredRole = "Software Engineer";
var formattedRole = HTMLheaderRole.replace("%data%", desiredRole);
$("#header").prepend(formattedName);


var Skills =  ["Programming", "Music", "Photography"]

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
};

var work = {
	"position" : "Software Engineer",

};

var projects = {


};

var education = {
	"name" : "Indiana University",
	"major" : "Computer Science",
	"city" : "Bloomington, Indiana",
};

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}