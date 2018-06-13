import React from 'react';
import './Team.css';
import MeetTheTeam from './MeetTheTeam/MeetTheTeam'
import teamPhoto from '../../assets/devTeamPhoto.jpg';

import {teamMembers} from '../../fixtures/teamMembers.json';
import Member from './Member/Member';

const Team = () => (
    <div className="team__container">
      <MeetTheTeam className="team__header"/>
  
      <div className="team__body">
        <img src={teamPhoto} alt="newIT_TeamPhoto" />
        <div className="team__member-cards">
          {
            teamMembers.map(member=>
            <Member key={member.id} members={member}/>)
          }
        </div>
      </div>
    </div>
  )
  export default Team;