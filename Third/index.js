import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';

const user='Murlidhr Chaturvedi';
 const scroll={
   color:'green'
 }

ReactDOM.render(
  <>
  <h2 className="welcome" style={scroll}>Good morning</h2>
    <h1 style={{color:'coral',textAlign:'center',margin:'40px'}}>Hello {user}</h1>
    <div style={{textAlign:'center'}}>
    <img style={{height:'300px',width:'300px',margin:'5px'}} src="https://cdn.mos.cms.futurecdn.net/3upZx2gxxLpW7MBbnKYQLH-1024-80.jpg.webp" alt="earth"/>
    <img style={{height:'300px',width:'500px',margin:'5px'}} src="https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/ts-space-sun-and-solar-viewing-facts-versus-fiction.jpg?itok=gaBs6QMS" alt="sun"/>
    <img style={{height:'300px',width:'300px',margin:'5px'}} src="https://images.tribuneindia.com/cms/gall_content/2017/11/2017_11$largeimg14_Tuesday_2017_092711874.jpg" alt="mars"/>
    </div>
  </>
  ,
  document.getElementById('root')
)
  
