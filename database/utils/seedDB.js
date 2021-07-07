const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "695 Park Ave, New York, NY 10065",
		imageUrl:"https://s29068.pcdn.co/wp-content/uploads/hunter-new-york-city-street-view.jpg"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "Cambridge, MA",
		imageUrl: "https://images.static-collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg?tr=w-2000,c-force"
	});

	const dummy_campus3 = await Campus.create({
		name: "NYU",
		description: "This is a school in NYC.",
		address:"New York, NY 10003",
		imageUrl:"https://engineering.nyu.edu/sites/default/files/styles/content_header_default_1x/public/2018-09/campus-convocation-2018-sign.jpg?h=69f2b9d0&itok=u8diKT3n"
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      		lastname: "Shmo",
			email: "jshmo@hunter.cuny.edu",
			gpa:3.5
		});

	await dummy_student.setCampus(dummy_campus);
	
	const dummy_student2 = await Student.create({
			firstname: "Katie",
      		lastname: "Shua",
			email: "katieshua@harvard.edu",
			gpa:3.9
		});

	await dummy_student2.setCampus(dummy_campus2);
	
	
}

module.exports = seedDB;