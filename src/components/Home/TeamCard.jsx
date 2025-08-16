import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon, faLinkedinIn } from '../../imports/global';

const TeamCard = ({ image, name, title, description, linkedin }) => {
  return (
    <Card className="rounded-5 text-start h-100 position-relative card px-3 px-md-4 team-card">
      <div className="d-flex align-items-start position-relative">
        <img src={image} alt={name} />
        <div className="ms-3 align-self-end">
          <h6 className="mb-0 fw-semibold">{name}</h6>
          <p className="mb-0 fw-normal small">{title}</p>
        </div>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="position-absolute top-0 end-0"
        >
          <div className="team-linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} className="linkedin-icon" />
          </div>
        </a>
      </div>

      <hr className="my-4 opacity-75" />

      <Card.Text className="team-description small">{description}</Card.Text>
    </Card>
  );
};

export default TeamCard;