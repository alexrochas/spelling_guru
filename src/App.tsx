import React, {Component, SyntheticEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import uiStore from './store';
import action from './action';
import {Col, Input, Row} from 'antd';
import {observer} from 'mobx-react';

@observer
class App extends Component {

  static inputChange(event: SyntheticEvent) {
    // @ts-ignore
    action.inputChange(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
          </Col>
          <Col className="gutter-row" span={8}>
            <header>Spelling Guru</header>
            <Input placeholder="Start typing" onInput={App.inputChange}/>
            <p>
              {uiStore.text}
            </p>
            {uiStore.spelledInput.map((entry) => {
              return <div><span>{entry.key}: {entry.value}</span></div>
            })}
          </Col>
          <Col className="gutter-row" span={8}>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
