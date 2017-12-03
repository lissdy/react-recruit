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
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'boss'
    }
    this.register = this.register.bind(this)
  }
  register() {
    console.log(this.state)
  }

  handleChange(key, value) {
    this.setState({[key]: value})
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <h2>注册页</h2>
        <List>
          <InputItem onChange={(v) => this.handleChange('user', v)}>用户名</InputItem>
          <WhiteSpace/>
          <InputItem type='password' onChange={(v) => this.handleChange('pwd', v)}>密码</InputItem>
          <WhiteSpace/>
          <InputItem type='password' onChange={(v) => this.handleChange('repeatpwd', v)}>确认密码</InputItem>
          <WhiteSpace/>
          <RadioItem checked={this.state.type == 'genuis'} onChange={() => this.handleChange('type', 'genuis')}>牛人</RadioItem>
          <WhiteSpace/>
          <RadioItem checked={this.state.type == 'boss'} onChange={() => this.handleChange('type', 'boss')}>Boss</RadioItem>
          <WhiteSpace/>
          <Button type='primary' onClick={this.register}>注册</Button>
        </List>
      </div>
    )

  }
}

export default Register
