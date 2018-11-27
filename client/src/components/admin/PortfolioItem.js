import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ work, deleteHandler }) => {
    return (
        <div className="admin-right__item">
            <h3 className="admin-right__title">{work.name}</h3>
            <Link
                to={`/admin/portfolio/${work._id}`}
                className="admin-right__btn"
            >
                Edit
            </Link>
            <div
                onClick={() => deleteHandler(work._id)}
                className="admin-right__btn"
            >
                Delete
            </div>
        </div>
    );
};

export default PortfolioItem;
