import React from 'react'
import {
  List,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Radio
} from 'antd-mobile'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'boss'
    }
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <h2>注册页</h2>
        <List>
          <InputItem>用户名</InputItem>
          <WhiteSpace/>
          <InputItem>密码</InputItem>
          <WhiteSpace/>
          <InputItem>确认密码</InputItem>
          <WhiteSpace/>
          <RadioItem checked={this.state.type == 'genuis'}>牛人</RadioItem>
          <WhiteSpace/>
          <RadioItem checked={this.state.type == 'boss'}>Boss</RadioItem>
          <WhiteSpace/>
          <Button type='primary' onClick={this.register}>注册</Button>
        </List>
      </div>
    )

  }
}

export default Register
