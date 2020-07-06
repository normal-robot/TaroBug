import React from 'react'
import { View } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'

function Insert(props) {
  const { className } = props

  useReady(() => {
    console.log('直接插入页面组件的 useReady 已被调用')
  })

  return (
    <View>
      
    </View>
  )
}

export default Insert