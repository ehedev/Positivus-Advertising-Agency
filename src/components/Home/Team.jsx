import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from './SectionHeader';
import TeamCard from './TeamCard';
import teamMembers from '../../data/teamMembers';
  
const Team = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const toggleShow = () => {
        if (visibleCount === 6) {
          setVisibleCount(teamMembers.length);
        } else {
          setVisibleCount(6);
        }
    };

    return (
        <section className="team-section py-5">
        <Container>
            <SectionHeader
            title="Team"
            description="Meet the skilled and experienced team behind our successful digital marketing strategies"
            />

            <Row className="gy-4">
                {teamMembers.slice(0, visibleCount).map((member, index) => (
                    <Col key={index} xs={12} md={6} lg={4}>
                        <TeamCard {...member} />
                    </Col>
                ))}
            </Row>

            {teamMembers.length > 6 && (
                <div className="text-end mt-4">
                    <button className="custom-button btn btn-dark team-button" onClick={toggleShow}>
                        {visibleCount === 6 ? 'See all team' : 'Hide team'}
                    </button>
                </div>
            )}
        </Container>
        </section>
    );
};
  
export default Team;