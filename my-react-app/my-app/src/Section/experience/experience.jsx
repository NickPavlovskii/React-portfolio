import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs';
const experience = () => {
  return (
 
      <section id='experience'>
        <h5>What Skills I have</h5>
        <h2>experience</h2>
        
      <div className="container experience_container" >
          <div className="experience_front">
            <h3>frontend</h3>
              <div className="experience_content">
                <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon'/>
                    <div><h4>HTML</h4>
                    <small className='text-light'>Experienced</small></div>
                    
                </article>
                <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon'/>
                    <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Experienced</small>

                    </div>
                    
                </article>
                <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon'/>
                    <div>
                    <h4>JS</h4>
                    <small className='text-light'>Experienced</small>

                    </div>
                    
                </article>
                <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon'/>
                    <div>
                    <h4>React</h4>
                    <small className='text-light'>Experienced</small>

                    </div>
                   
                </article>
                <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon'/>

                    <div>
                    <h4>TypeScrip</h4>
                    <small className='text-light'>Experienced</small>

                    </div>
                    
                </article>
                <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon'/>
                    <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Experienced</small>

                    </div>
                    
                </article>

            </div>



          </div>
          <div className="experience_ds">
        
            <h3>data scients</h3>
              <div className="experience_content">
                <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon'/>
                    <div>
                    <h4>python</h4>
                    <small className='text-light'>Experienced</small>

                    </div>
                    
                </article>
                <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon'/>
                    <div>

                    <h4>SQL</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                    
                </article>
                <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon'/>

                    <div>
                    <h4>Tablue</h4>
                    <small className='text-light'>Experienced</small>

                    </div>
                    
                </article>
                <article className='experience_details'>
                    <BsFillPatchCheckFill className='experience_details-icon'/>

                    <div>

                    <h4>A/B testing</h4>
                    <small className='text-light'>Experienced</small>
                    </div>
                   
                </article>
              

          


          </div>



</div>


        </div>
        
        </section>

  )
}

export default experience
