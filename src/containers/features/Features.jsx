import React from 'react';
import './features.css'
import { Feature } from '../../components';

const featuresData =[
  {
    title:'improving distrust instantlg',
    text: 'considered sympathize uncoomnly ocasional assistance sufficent not. Letter of on become he tended active enable to.',
  },
  {
    title:'Become the tended active',
    text: 'considered sympathize uncoomnly ocasional assistance sufficent not. Letter of on become he tended active enable to.',
  },
  {
    title:'Message or am nothing',
    text: 'considered sympathize uncoomnly ocasional assistance sufficent not. Letter of on become he tended active enable to.',
  },
  {
    title:'Really boy law county',
    text: 'considered sympathize uncoomnly ocasional assistance sufficent not. Letter of on become he tended active enable to.',
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
        <div className="gpt3__features-heading">
          <h1 className="gradient__text">
            The Future is Now and You Just Need To Realize It. Step into Future Today and Make it Happen.
          </h1>
          <p>Request early access to get Started</p>
        </div>
        <div className="gpt3__features-container">
          {featuresData.map((item, index)=>(
            <Feature  title={item.title}  text={item.text} key= {item.title+index} />
          ))}
        </div>
    </div>
  )
}

export default Features