import React from 'react';
import './blog.css'
import {Article} from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A Lot is Happening. We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
           < Article imgUrl={blog01} date="sep 21, 2020" title="GPT-3 and OpenAI is the future. Let us explain how it is"/>
        </div>
        <div className="gpt3__blog-container_groupB">
            {< Article imgUrl={blog02} date="sep 21, 2020" title="GPT-3 and OpenAI is the future. Let us explain how it is"/> }
            { < Article imgUrl={blog03} date="sep 21, 2020" title="GPT-3 and OpenAI is the future. Let us explain how it is"/> }
            { < Article imgUrl={blog04} date="sep 21, 2020" title="GPT-3 and OpenAI is the future. Let us explain how it is"/> }
            {< Article imgUrl={blog05} date="sep 21, 2020" title="GPT-3 and OpenAI is the future. Let us explain how it is"/>}
            

        </div>
      </div>
    </div>
  )
}

export default Blog