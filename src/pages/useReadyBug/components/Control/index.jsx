import React from 'react'
import { View } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'

function Template(props) {
  const { className } = props

  useReady(() => {
    console.log('通过状态控制的组件 useReady 未打印')
  })

  return (
    <View>
      
    </View>
  )
}

export default Template