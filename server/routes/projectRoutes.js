const express = require('express');

const router = express.Router();

const Project = require('../models/Project');

router.get('/', async (req, res) => {

  const projects = await Project.find();

  res.json(projects);

});

router.post('/', async (req, res) => {

  try {

    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      githubLink: req.body.githubLink,
      liveDemo: req.body.liveDemo,
    });

    const savedProject = await newProject.save();

    res.json(savedProject);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

});

module.exports = router;