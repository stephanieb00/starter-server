const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

//so we don't have to use try-catch for each request handler
const ash = require('express-async-handler');

router.get('/', ash(async(req, res) => {
  let students = await Student.findAll({
    include: [Campus],
    order: [['id', 'ASC']]
  });
  res.status(200).json(students);
}));

/** GET STUDENT BY ID */
router.get('/:id', ash(async(req, res) => {
  let student = await Student.findByPk(req.params.id, {include: [Campus]});
  res.status(200).json(student);
}));

/** ADD NEW STUDENT */
router.post('/', function(req, res, next) {
  console.log(req.body);
  Student.create(req.body)
    .then(createdStudent => {
      if (req.body.campusId)
        createdStudent.setCampus(req.body.campusId);
      res.status(200).json(createdStudent);
    })
    .catch(err => next(err));
});

/** DELETE STUDENT */
router.delete('/:id', function(req, res, next) {
  Student.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.status(200).json("Deleted a student!"))
    .catch(err => next(err));
});

/******************* EDIT *********************/

router.put('/:id', ash(async(req, res) => {
  //Puts "" to null values for imageURL to allow default value
  //be constructed.
  if (req.body.imageURL === "")
    req.body.imageURL = "https://cdn.onlinewebfonts.com/svg/img_210318.png";
  //Puts "" to null values for GPA, to not fail a validation check
    if (req.body.gpa === "")
    req.body.gpa = null;
  await Student.update(req.body,
        { where: {id: req.params.id} }
  );
  let student = await Student.findByPk(req.params.id);
  res.status(201).json(student);
}));

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;