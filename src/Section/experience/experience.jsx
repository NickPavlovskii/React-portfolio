import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs';
const experience = () => {
    return (

        <section id='experience' className="container">
            <h5>What Skills I have</h5>
            <h2>Expeirience</h2>
            <div className="container experience_container" >
                <div className="experience_block experience_front " >
                    <h3>frontend</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div><h4>HTML</h4>
                                <small className='text-light'>Experienced</small></div>

                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>JS</h4>
                                <small className='text-light'>Experienced</small>

                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>

                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />

                            <div>
                                <h4>Vue</h4>
                                <small className='text-light'>Experienced</small>

                            </div>

                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>jquery</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>


                    </div>
                </div>
                <div className= " experience_block experience_ds ">
                    <h3>Tools Experience</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Version Control with Git</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Jira Usage</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Design in Figma</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>State Management (Vuex/Redux)</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Geoserver Operation</h4>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className='experience_details-icon' />
                            <div>
                                <h4>Linux/Windows Proficiency</h4>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default experience
