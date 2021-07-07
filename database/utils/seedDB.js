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

	const dummy_campus4 = await Campus.create({
		name: "Stanford",
		description: "This is a school in CA.",
		address:" 450 Serra Mall, Stanford, CA 94305",
		imageUrl:"https://www.collegeconsensus.com/wp-content/uploads/2016/12/intro_about-800x532.jpg"
	});
	const dummy_campus5 = await Campus.create({
		name: "MIT",
		description: "This is a school in MA.",
		address:"77 Massachusetts Ave, Cambridge, MA 02139",
		imageUrl:"https://news.mit.edu/sites/default/files/download/201810/MIT-Computer-Announce-01-PRESS.jpg"
	});
	const dummy_campus6 = await Campus.create({
		name: "Arizona State",
		description: "This is a school in AZ.",
		address:"Phoenix, AZ 85004",
		imageUrl:"https://campus.asu.edu/sites/default/files/styles/asu_spotlight_image/public/general/campus-tempe_0.jpg?itok=dRjlIcRr"
	});
	const dummy_campus7 = await Campus.create({
		name: "University of Michigan",
		description: "This is a school in MI.",
		address:"500 S State St, Ann Arbor, MI 48109",
		imageUrl:"https://www.secondwavemedia.com/epicenter/galleries/cmu-courtesy.jpg"
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

	const dummy_student3 = await Student.create({
		firstname: "Junior",
		  lastname: "Williamsen",
		email: "juniorw@standford.edu",
		gpa:3.4
	});

	const dummy_student4 = await Student.create({
		firstname: "Ruben",
		  lastname: "Tio",
		email: "rtio@nyu.edu",
		gpa:2.5
	});

	const dummy_student5 = await Student.create({
		firstname: "Lucifer",
		  lastname: "Morningstar",
		email: "lmorningstar@arizonastate.edu",
		gpa:4.0
	});

	const dummy_student6 = await Student.create({
		firstname: "Chloe",
		  lastname: "Decker",
		email: "cdecker@arizonastate.edu",
		gpa:3.2
	});

	const dummy_student7 = await Student.create({
		firstname: "Felicity",
		  lastname: "Smoke",
		email: "felicitys@mit.edu",
		gpa:4.0
	});
	const dummy_student8 = await Student.create({
		firstname: "Helen",
		  lastname: "Gao",
		email: "hgao@uam.edu",
		gpa: 2.8
	});
	
	
}

module.exports = seedDB;