import React, { Component } from 'react'
import { View, Button, Text, Navigator } from '@tarojs/components'
import { connect } from 'react-redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
     <Navigator style={{color: 'blue'}} url='/pages/useReadyBug/index'>toUseReadyBug</Navigator>
    )
  }
}

export default Index

