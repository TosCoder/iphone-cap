import React from 'react'
import { Row } from 'antd'

export const Youtube = () => {
    return (
        <div className='style-youtube'>
                <Row justify='center'>
                    <img alt='youtube' src={require('../../assets/images/youtube_premium.png')} />
                </Row>
                <Row justify='center'>
                    พร้อมรับชมวิดีโอบน YouTube แบบไม่มีโฆษณาคั่น
                    ด้วย YouTube Premium ฟรีสูงสุด 6 เดือน
                    รับสิทธิ์กด *656*1#
                </Row>
        </div>
    )
}