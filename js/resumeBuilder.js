$(document).click(function(loc) {
    //grabbing the click location.
    logClicks(loc.pageX, loc.pageY);
});

function formatMessage(obj, data){
    return obj.replace("%data%", data);
}

var bio = {
    "name": "Johnny Archer",
    "role": "Application Support Specialist",
    "contacts": {
        "mobile": "541-350-7214",
        "email": "johnnyarcher80@gmail.com",
        "github": "johnnyarcher",
        "location": "Bend, OR"
    },
    "biopic": "images/spacegirl.jpg",
    "welcomeMessage": "Queen of the Nerds",
    "skills": ["JavaScript", "HTML", "CSS", "Photoshop", "Heroku"],
    "display": function() {
        var formattedName = formatMessage(HTMLheaderName, this.name);
        var formattedRole = formatMessage(HTMLheaderRole, this.role);
        var formattedBioPic = formatMessage(HTMLbioPic, this.biopic);
        var formattedWelcomeMessage = formatMessage(HTMLwelcomeMessage, this.welcomeMessage);
        var formattedContactInfo = formatContactInfo();

        if (formattedContactInfo.length > 0) {
            var topContacts = $("#topContacts");
            var footerContacts = $("#footerContacts");
            for (var i = 0, count = formattedContactInfo.length; i < count; i++) {
                topContacts.append(formattedContactInfo[i]);
                footerContacts.append(formattedContactInfo[i]);
            }
            var header = $("#header");
            header.prepend(formattedRole);
            header.prepend(formattedName);
            header.append(formattedBioPic);
            header.append(formattedWelcomeMessage);
        }
    },
    "formatContactInfo": function(){
        var contactInfo = [];
        contactInfo.push(formatMessage(HTMLmobile, this.contacts.mobile));
        contactInfo.push(formatMessage(HTMLemail, this.contacts.email));
        contactInfo.push(formatMessage(HTMLgithub, this.contacts.github));
        contactInfo.push(formatMessage(HTMLlocation, this.contacts.location));
        return contactInfo;
    }
};

var work = {
    "jobs": [{
            "employer": "The School of Wonder",
            "title": "Owner",
            "location": "Bend, OR",
            "dates": "August 2009 - August 2013",
            "description": "Owned a small private preschool for little girls"
        },
        {
            "employer": "G5 Search Marketing Inc.",
            "title": "Application Support Specialist",
            "location": "Bend, OR",
            "dates": "August 2013 - Current",
            "description": "Provide third level support for development, maintenance and implementation in the areas related to G5 applications and software configuration"
        }
    ],
    "display": function() {
        var workExperienceDiv = $("#workExperience");
        for (var i = 0, count = this.jobs.length; i < count; i++) {
            workExperienceDiv.append(HTMLworkStart);
            var job = jobs[i];
            var formattedEmployer = formatMessage(HTMLworkEmployer, job.employer);
            var formattedTitle = formatMessage(HTMLworkTitle, job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = formatMessage(HTMLworkDates, job.dates);
            var formattedLocation = formatMessage(HTMLworkLocation, job.location);
            var formattedDescription = formatMessage(HTMLworkDescription, job.description);
            $(".work-entry:last").append(formattedEmployerTitle + formattedLocation + formattedDates + formattedDescription);
        }
    }
};

var education = {
    "schools": [{
        "name": "University of Oregon",
        "degree": "BS",
        "majors": ["Sociology & Computer Science"],
        "dates": "2002-2006",
        "location": "Eugene, OR",
        "url": "https://uoregon.edu/"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Web Developer",
        "dates": "2016 - Current",
        "url": "https://github.com/johnnyarcher/udacity"

    }],
    "display": function() {
        this.educationDiv = $("#education");
        this.displaySchools();
        this.displayOnlineCourses();
    },
    "displaySchools": function(){
        for (var i = 0, count = this.schools.length; i < count; i++) {
            this.educationDiv.append(HTMLschoolStart);
            var school = this.schools[i];
            var schoolName = formatMessage(HTMLschoolName, schools.name);
            schoolName = schoolName.replace("#", schools.url);
            var schoolDegree = formatMessage(HTMLschoolDegree, schools.degree);
            var schoolDates = formatMessage(HTMLschoolDates, schools.dates);
            var schoolLocation = formatMessage(HTMLschoolLocation, schools.location);
            var schoolMajors = formatMessage(HTMLschoolMajors, schools.majors);
            $(".education-entry:last").append(schoolName + schoolDegree + schoolDates + schoolLocation + schoolMajors);
        }
    },
    "displayOnlineCourses": function(){
        this.educationDiv.append(HTMLonlineClasses);
        for (var i = 0, count = this.onlineCourses.length; i < count; i++) {
            this.educationDiv.append(HTMLschoolStart);
            var onlineCourse = this.onlineCourse[i];
            var onlineTitle = formatMessage(HTMLonlineTitle, onlineCourse.title);
            onlineTitle = onlineTitle.replace("#", onlineCourse.url);
            var onlineSchool = formatMessage(HTMLonlineSchool, onlineCourse.school);
            var onlineDates = formatMessage(HTMLonlineDates, onlineCourse.dates);
            var onlineURL = formatMessage(HTMLonlineURL, onlineCourse.url);
            $(".education-entry:last").append(onlineTitle + onlineSchool + onlineDates + onlineURL);
        }
    }
};

var projects = {
    "projects": [{
        "title": "Build a Portfolio Site",
        "dates": "2016",
        "description": "Udacity Front-End Web Developer Project",
        "images": ["images/portfolio.png"],
        "url": "https://github.com/johnnyarcher/udacity/tree/master/johnny-archer-portfolio"
    }],
    "display": function() {
        var projectsDiv = $("#projects");
        for (var i = 0, this.projects.length; i < count; i++) {
            var project = this.projects[i];
            projectsDiv.append(HTMLprojectStart);
            var projectTitle = formatMessage(HTMLprojectTitle, project.title);
            projectTitle = projectTitle.replace("#", project.link);
            var projectDates = formatMessage(HTMLprojectDates, project.dates);
            var projectDescription = formatMessage(HTMLprojectDescription, project.description);
            var projectImage = "";
            for (var j = 0, imgCount = project.images.length; j < imgCount; j++) {
                projectImage += formatMessage(HTMLprojectImage, project.images[j]);
            }
            $(".project-entry:last").append(projectTitle + projectDates + projectDescription + projectImage);
        }
    }
};

var places = {
    "location": "Eugene, OR"
};

$(document).ready(function(){
    bio.display();
    education.display();
    work.display();
    projects.display();
    $("#mapDiv").append(googleMap);
});

