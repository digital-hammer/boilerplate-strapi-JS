import {useState, useEffect, useRef} from 'react'
import cx from 'classnames'
import Header from 'sections/header.js'

import layout from 'styles/layout.module.scss'
import global from 'styles/global.module.scss'

export default () => {
  const [width, setWidth] = useState(0)
  const {data, setData} = useState(false)
  
  useEffect(() => {
    const { data } = fetch('api/headers/1')
    setData(data)
  }, [])

  useEffect(() => {
    const w = () => setWidth(window.innerWidth)
    w()
    window.addEventListener('resize', w)
    return () => window.removeEventListener('resize', w)
	}, [width])
  
  return data && (
    <div className={cx(layout.h100_vh, layout.w100_vw, layout.f_row, layout.justify_center, layout.align_center)}>
      <Header />
        <h1 className={global.text_complementary}>{title}</h1>
    </div>
  )
}
