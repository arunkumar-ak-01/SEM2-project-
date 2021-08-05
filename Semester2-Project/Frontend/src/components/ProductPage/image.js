import React from 'react'
import { Col } from 'react-bootstrap' 


export default function image(props) {
    return (
        <React.Fragment>
            {props.imagesrc.map(img => (
                <Col className="   col-lg-6 col-md-12" style={{margin:"13px 0px 13px 0px"}}>
                   
                <img style={{width:"100%",height:"100%"}} src={img} alt="img" />
                <h5>Amazing gifts are available here order and share your happiness with your friends. Follow our social media pages nd keep support us.</h5>
                </Col>
                ))}
        </React.Fragment>
    )
}
