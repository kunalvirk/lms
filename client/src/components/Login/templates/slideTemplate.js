import React from 'react'
import './slideTemplate.css';

const SlideTemplate = (props) => {
  return (
    <div className="fadeOut item auth-cover-img overlay-wrap" style={{backgroundImage: `url(${props.bg})`}}>
        <div className="auth-cover-info py-xl-0 pt-100 pb-50">
            <div className="auth-cover-content text-center w-xxl-75 w-sm-90 w-xs-100">
                <h1 className="display-3 text-white mb-20">{props.title}</h1>
                <p className="text-white">{props.content}</p>
            </div>
        </div>
        <div className="bg-overlay bg-trans-dark-50"></div>
    </div>
  )
}

export default SlideTemplate;
