import React from 'react'
import './portfolio.css'
import Project from './Projects'


// const tabs =Document.querySelectorAll("[data-content]"),
//       tabContents=Document.querySelectorAll("[data-content]")


const portfolio = () => {
  const {projectItems}  = Project;
  return (
    <section id='portfolio'>
    <h5>
      My Recent Work
    </h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">
    {projectItems.map((projectItems,  productIndex) => {
          return (
    

<article className='portfolio_item' data-content id='skill'>
        <div className="portfolio_item_img"><img src={projectItems.img} alt="" /></div>
        <h4 className='wb'>{projectItems.deriction}</h4>
        <h3> { projectItems.name}</h3>
        <div className='bt'>
      <a href={projectItems.gitHub} target='_blank' className='btn about_button bt'>gitHub</a>
        </div>
        </article>
        
       
     
     
      )
        })}
      
      </div>
    
    </section>
  )
}

export default portfolio
