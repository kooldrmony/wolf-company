import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import './ListScreen.css';

function ListScreen() {
  
  const [data, setData] = useState([])
  const [searchTag, setSearchTag] = useState("");
  const [storageData, setStorageData] = useState([]);

  const API_QUERY = `
  {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
  `

  useEffect(() => {
    // fetch('http://jsonplaceholder.typicode.com/posts')
    fetch("http://api.spacex.land/graphql/", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({ query: API_QUERY })
    })
    .then(response => response.json())
    .then(response => setData(response.data.launchesPast))

    // findIndex()
  }, [])

  const handleID = (name, date, site) => {
    localStorage.setItem('name', name);
    localStorage.setItem('date', date);
    localStorage.setItem('site', site);

  }

//   const findIndex = () => {

//     let storageID = localStorage.getItem('id');
//     let storageTag = localStorage.getItem('tag')
//     let index = data.findIndex(x => x.id == storageID)
//     // data[index].tag = storageTag
//     // if(!data[index].tag) {
//     //     data[index].tag = "";
//     // } else {
//     //     data[index].tag = storageTag
//     // }
    
//     // if(storageTag) {
//     //     data[index].tag = storageTag;
//     // }
//     // localStorage.setItem('newObj', data[index])
//     // console.log('data', data[index])
//   }
  
  console.log(data)
  return (
    <div className="container">
      <div data-testid="listScreen-1" className="listScreen">   
              <h1>Space X Launches</h1>
              <input type="text" placeholder="Search by tag name" onChange={(e) => {
                  setSearchTag(e.target.value);
              }}/>
              <h1>{data.filter(title => {
                  if(searchTag == "") {
                      return title 
                  } else if (title.mission_name.toLowerCase().includes(searchTag.toLowerCase())) {
                      return title
                  }
              })
              .map(item => {
                  return <Link to="/detailscreen" onClick={() => handleID(item.mission_name, item.launch_date_local, item.launch_site.site_name_long)}><ul key={item.id} className="mission_name">{item.mission_name}</ul></Link>
              })}</h1>
      </div>
    </div>
  );
}

export default ListScreen;

