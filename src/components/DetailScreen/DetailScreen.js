import React, { useState } from 'react';
import './DetailScreen.css';

function DetailScreen() {
  const [tags, setTags] = useState([])
  let missionName = localStorage.getItem('name');
  let missionDate = localStorage.getItem('date');
  let missionSite = localStorage.getItem('site');

  const addTags = (e) => {
    
    if(e.key === "Enter") {
      setTags([...tags, e.target.value]);
      localStorage.setItem("tag", e.target.value)
      e.target.value = "";
    }
  };

  return (
    <div className="container">

      <div data-testid="detailScreen-1" className="mission-details">
        <h1>Mission Details</h1>
        <p>Mission Name: {missionName}</p>
        <p>Mission Date: {missionDate}</p>
        <p>Mission Location: {missionSite}</p>
        <div>
          <h1>Tags:</h1>
          <ul className="tags">
            {tags.map((tag, index) => (
              <h5 key={index} >
                {tag}
              </h5>
            ))}
          </ul>
          <input type="text" placeholder="Add a tag" onKeyUp={addTags} />
        </div>
      </div>
    </div>
  );
}

export default DetailScreen;