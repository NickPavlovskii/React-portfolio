import React from 'react'
import './portfolio.css'
import demo1 from "./../../ass/img/demo1.PNG"
import demo2 from "./../../ass/img/demo2.PNG"
import demo3 from "./../../ass/img/demo3.jpg"
const portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>
      My Recent Work
    </h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
      <article className='portfolio_item'>
        <div className="portfolio_item_img"><img src={demo1} alt="" /></div>
        <h3>React commerce Website</h3>
        <a href="https://github.com/NickPavlovskii/webDemo" target='_blank' className='btn about_button'>gitHub</a>
        <a href="http://127.0.0.1:5500/my-react-app/my-app/src/Section/portfolio/webDemo/index.html" target='_blank' className='btn btn-primary'>Demo</a>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item_img"><img src={demo2} alt="" /></div>
        <h3>js food</h3>
        <a href="https://github.com/NickPavlovskii/web_js_only" target='_blank' className='btn about_button'>gitHub</a>
        <a href="http://127.0.0.1:5555/my-react-app/my-app/Demo/marathon_js7/index.html" target='_blank' className='btn btn-primary'>Demo</a>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item_img"><img src={demo3} alt="" /></div>
        <h3>Virtual internship Data Science in Sberbank</h3>
        <a href="https://github.com/NickPavlovskii/sber" target='_blank' className='btn about_button'>gitHub</a>
        <a href="https://gitlab.com/O_niklad_O/sber_prediction/-/blob/main/sber_prediction.ipynb" target='_blank' className='btn btn-primary'>Demo</a>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item_img"><img src={demo1} alt="" /></div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com/NickPavlovskii/webDemo" target='_blank' className='btn about_button'>gitHub</a>
        <a href="http://127.0.0.1:5500/my-react-app/my-app/src/Section/portfolio/webDemo/index.html" target='_blank' className='btn btn-primary'>Demo</a>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item_img"><img src={demo1} alt="" /></div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com/NickPavlovskii/webDemo" target='_blank' className='btn about_button'>gitHub</a>
        <a href="http://127.0.0.1:5500/my-react-app/my-app/src/Section/portfolio/webDemo/index.html" target='_blank' className='btn btn-primary'>Demo</a>
      </article>
      <article className='portfolio_item'>
        <div className="portfolio_item_img"><img src={demo1} alt="" /></div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com/NickPavlovskii/webDemo" target='_blank' className='btn about_button'>gitHub</a>
        <a href="http://127.0.0.1:5500/my-react-app/my-app/src/Section/portfolio/webDemo/index.html" target='_blank' className='btn btn-primary'>Demo</a>
      </article>

    </div>
    </section>
  )
}

export default portfolio