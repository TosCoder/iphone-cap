import React from 'react'
import { Col } from 'antd'

export const List = () => {
    return (
        ['1','2','3'].map((item, index ) => 
            <Col key={index} lg={8} className='card-iphone'>
               
                <img alt='mobile' src={require('../../assets/images/iphone-gold.png')} className='style-mobile' />
            </Col>
        )
    )
}