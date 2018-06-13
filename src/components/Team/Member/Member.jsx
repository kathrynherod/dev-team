import React from 'react';
import './Member.css';

const Member = ({members}) => (
    <div className="member__card-container">
        <div className="member__name">Name: {members.name}</div>
        <div className="member__name">Birthday: {members.birthday}</div>
        <div className="member__name">Job Title: {members.role}</div>
        <div className="member__name">Hub Start Date: {members.hubStartDate}</div>
        <div className="member__name">Email: {members.email}</div>
    </div>
  )
  export default Member;