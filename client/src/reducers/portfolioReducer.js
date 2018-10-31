import { GET_PORTFOLIO, ADD_PORTFOLIO, SET_LOADING } from '../actions/types';

const initialState = {
    works: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PORTFOLIO:
            return {
                ...state
            };
        case ADD_PORTFOLIO:
            return {
                ...state,
                works: [action.payload, ...state.works],
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}

// {
//     id: 1,
//     name: 'Desktop App',
//     img:
//         'https://image.freepik.com/free-psd/business-cards-mock-up_1135-13.jpg',
//     description:
//         'I constantly add notes to the text documents on my desktop.',
//     techStack: ['Redux', 'Express', 'CSS3', 'ReactJS'],
//     viewAt: {
//         github: 'https://www.google.com/',
//         youtube: 'https://www.google.com/'
//     },
//     date: '2018'
// },
// {
//     id: 2,
//     name: 'Creative App',
//     img:
//         'https://cdn.dribbble.com/users/72506/screenshots/2362591/branding-mockup-db.jpg',
//     description:
//         'I constantly add notes to the text documents on my desktop.',
//     techStack: ['HTML5', 'Sass', 'JavaScript'],
//     viewAt: {
//         github: 'https://www.google.com/',
//         youtube: 'https://www.google.com/'
//     },
//     date: '2018'
// }
