import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCards.css';

function CourseCards({ cardData }) {
  return (
    <div className="row px-5">
      {cardData.map((card) => (
        <div
          className={`col-sm-6 col-md-4 col-lg-3 mb-4 ${
            card.domain === 'Development' ? 'development-adjust' :
            card.domain === 'CP/DSA' ? 'cp-adjust' : 
            card.domain === 'Interview / Placement' ? 'interview-adjust' : ''
          }`}
          key={card.id}
        >
          <div className="card">
            <div className="card-body">
              <Link to={card.link} className="card-link">
                <div
                  className="card-background"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="card-text">{card.domain}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseCards;
