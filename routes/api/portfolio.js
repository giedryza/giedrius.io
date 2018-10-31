const express = require('express');
const router = express.Router();
const passport = require('passport');

// Load Portfolio Model
const Portfolio = require('../../models/Portfolio');

// @route   POST api/portfolio
// @desc    Add Portfolio
// @access  Private
router.post(
    '/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newPortfolio = new Portfolio({
            name: req.body.name,
            img: req.body.img,
            description: req.body.description,
            techStack: req.body.techStack.split(','),
            web: req.body.web,
            github: req.body.github,
            youtube: req.body.youtube
        });

        newPortfolio
            .save()
            .then(portfolio => res.json(portfolio))
            .catch(err => res.status(400).json(err));
    }
);

// @route   GET api/portfolio
// @desc    Get all Portfolio
// @access  Public
router.get('/', (req, res) => {
    Portfolio.find()
        .sort({ date: -1 })
        .then(portfolio => res.json(portfolio))
        .catch(err => res.status(404).json(err));
});

// @route   GET api/portfolio/:id
// @desc    Get Portfolio by id
// @access  Private
router.get('/:id', (req, res) => {
    Portfolio.findOne({ _id: req.params.id })
        .then(portfolio => res.json(portfolio))
        .catch(err => res.status(404).json(err));
});

// @route   PATCH api/portfolio/:id
// @desc    Update Portfolio
// @access  Private
router.patch(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Portfolio.findOne({ _id: req.params.id })
            .then(portfolio => {
                const updatedPortfolio = {
                    name: req.body.name,
                    img: req.body.img,
                    description: req.body.description,
                    techStack: req.body.techStack.split(','),
                    web: req.body.web,
                    github: req.body.github,
                    youtube: req.body.youtube
                };

                Portfolio.updateOne(
                    { _id: req.params.id },
                    { $set: updatedPortfolio }
                )
                    .then(portfolio => res.json(portfolio))
                    .catch(err => {
                        res.status(400).json(err);
                    });
            })
            .catch(err => res.status(400).json(err));
    }
);

// @route   DELETE api/portfolio/:id
// @desc    Delete Portfolio
// @access  Private
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Portfolio.findOne({ _id: req.params.id })
            .then(portfolio => {
                Portfolio.findOneAndDelete({ _id: req.params.id })
                    .then(result => res.json({ message: 'Delete successful' }))
                    .catch(err => res.status(400).json(err));
            })
            .catch(err => res.status(400).json(err));
    }
);

module.exports = router;
