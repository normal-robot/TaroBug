import React, { useState } from 'react'
import { View } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'
import Insert from './components/Insert'
import Control from './components/Control'

function useReadyBug(props) {
  const { className } = props

  const [isShow, changeShowStatus] = useState(false)

  useReady(() => {
    changeShowStatus(true)
  })

  return (
    <View>
      <Insert />
      {
        isShow &&
        <Control />
      }
    </View>
  )
}

export default useReadyBug