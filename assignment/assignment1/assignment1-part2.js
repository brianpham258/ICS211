function info(code, name) {
	this.code = code;
	this.name = name;
	this.info = function() {
		console.log("The course code is " + this.code + " and the course name is " + this.name + ".");
	}
}

var course = new info(211, "Web Applications");

course.info();