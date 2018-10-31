const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    techStack: {
        type: [String],
        required: true
    },
    web: {
        type: String
    },
    github: {
        type: String
    },
    youtube: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Portfolio = mongoose.model('portfolio', PortfolioSchema);
