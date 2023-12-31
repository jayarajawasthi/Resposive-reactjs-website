import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="Possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistence indulgence unpleasing. Not thoughts all exercise blessing indulgene way everythingjoy alteration boisterous the attachement. Party we y ears to oder allow asked of </p>
        <h4>Request for early access </h4>
      </div>
    </div>
  )
}

export default Possibility