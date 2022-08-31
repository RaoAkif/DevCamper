const Bootcamp = require('../models/Bootcamp');

// Desc   Get all bootcamps
// Route  GET /api/v1/bootcamps
// Acces  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
}

// Desc   Get single bootcamp
// Route  GET /api/v1/bootcamps/:id
// Acces  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}

// Desc   Create a bootcamp
// Route  PUT /api/v1/bootcamps/:id
// Acces  Public
exports.createBootcamp = (req, res, next) => {
  console.log(req.body)
  res.status(200).json({ success: true, msg: "Create new bootcamp" });
}

// Desc   Update single bootcamp
// Route  GET /api/v1/bootcamps/:id
// Acces  Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update a bootcamp ${req.params.id}` });
}

// Desc   Delete single bootcamp
// Route  DELETE /api/v1/bootcamps/:id
// Acces  Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete a bootcamp ${req.params.id}` });
}
