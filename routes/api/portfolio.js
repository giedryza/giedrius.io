const express = require('express');
const router = express.Router();
const passport = require('passport');
const formidable = require('express-formidable');
const cloudinary = require('cloudinary');

// Load Portfolio Model
const Portfolio = require('../../models/Portfolio');

// Cloudinary config
const cloud = require('../../config/keys');
cloudinary.config({
    cloud_name: cloud.cloudName,
    api_key: cloud.cloudApiKey,
    api_secret: cloud.cloudApiSecret
});

// @route   POST api/portfolio/uploadimage
// @desc    Upload Image
// @access  Private
router.post(
    '/uploadimage',
    passport.authenticate('jwt', { session: false }),
    formidable(),
    (req, res) => {
        cloudinary.uploader.upload(
            req.files.file.path,
            result => {
                res.status(200).send({
                    public_id: result.public_id,
                    url: result.url
                });
            },
            {
                public_id: `${Date.now()}`
            }
        );
    }
);

// @route   POST api/portfolio/removeimage
// @desc    Remove Image
// @access  Private
router.get(
    '/removeimage',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        let public_id = req.query.public_id;

        cloudinary.uploader.destroy(public_id, (err, result) => {
            if (err) return res.json({ success: false, err });
            res.status(200).send('ok');
        });
    }
);

// @route   POST api/portfolio
// @desc    Add Portfolio
// @access  Private
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newPortfolio = new Portfolio(req.body);

        newPortfolio
            .save()
            .then(portfolio => res.json({ success: true, portfolio }))
            .catch(err => res.status(400).json({ success: false, err }));
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

// @route   GET api/portfolio/:type
// @desc    Get Portfolio by tech
// @access  Public
router.get('/:type', (req, res) => {
    Portfolio.find({ techStack: req.params.type })
        .sort({ date: -1 })
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
        Portfolio.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
            .then(portfolio => res.json({ success: true, portfolio }))
            .catch(err => {
                res.status(400).json(err);
            });
    }
);

// @route   DELETE api/portfolio/:id
// @desc    Delete Portfolio
// @access  Private
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Portfolio.findOneAndDelete({ _id: req.params.id })
            .then(result => res.json({ message: 'Delete successful' }))
            .catch(err => res.status(400).json(err));
    }
);

module.exports = router;
