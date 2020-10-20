import React, { Fragment, Component } from 'react';
import './App.css';
import { List, Youtube } from './components'
import { Row } from 'antd'

class App extends Component {
  render() {
    return (
      <Fragment>
        <img alt='header' src={require('./assets/images/herobanner_pc.jpg')} />
        <br />
        <br />
        <div className="App">
          <p style={{ fontSize: '60px', fontWeight: '700' }} >iPhone 12 Max และ iPhone 12</p>
          <p style={{ fontSize: '60px', fontWeight: '700', color: '#198541' }}>เริ่มเพียง XX,XXX.-</p>
          <p style={{ fontSize: '40px', fontWeight: '500' }}>ผ่อนสบายๆ กับเอไอเอส นาน 24 เดือน ไม่ต้องเปลี่ยนแพ็กเกจ</p>
          <p style={{ fontSize: '25px' }}>สำหรับลูกค้าเอไอเอส เซเรเนด แพลทีนัม และโกลด์ อายุการใช้งาน 4 ปีขึ้นไป</p>
          <br />
          <br />
          <Row>
            <List />
          </Row>
          <br />
          <br />
        </div>
        <Youtube />
      </Fragment>

    )
  }
}

export default App;
