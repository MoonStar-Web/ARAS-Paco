import { Link } from 'react-router-dom';
import React from 'react';

const teamMembers = [
  {
    name: 'Willie Ray',
    image: 'assets/images/team/team-1-1.png',
  },
  {
    name: 'Carlos Bailey',
    image: 'assets/images/team/team-1-2.png',
  },
  {
    name: 'Sallie Grant',
    image: 'assets/images/team/team-1-3.png',
  },
  {
    name: 'Hallie Moss',
    image: 'assets/images/team/team-1-4.png',
  },
  {
    name: 'Bobby Jenkins',
    image: 'assets/images/team/team-1-5.png',
  },
  {
    name: 'Nina Oliver',
    image: 'assets/images/team/team-1-6.png',
  },
];

function First() {
  return (
    <>
      <section className="team-page pt-120 pb-90">
        <div className="container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="team-one__card mb-30">
                  <div className="team-one__image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-one__content">
                    <div className="team-one__social">
                      <Link to="#" className="fab fa-facebook-square"></Link>
                      <Link to="#" className="fab fa-twitter"></Link>
                      <Link to="#" className="fab fa-pinterest-p"></Link>
                      <Link to="#" className="fab fa-instagram"></Link>
                    </div>
                    <h3>{member.name}</h3>
                    <span>Expert Agent</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
