'use client'

import { useEffect } from 'react'
import Titlebar from './titlebar'
import Sidebar from './sidebar'
import Bottombar from './bottombar'
import { useRouter } from 'next/navigation'
import styles from '../styles/layout.css'

const Layout = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const main = document.getElementById('main-editor')
    if (main) {
      main.scrollTop = 0
    }
  }, [router.pathname])

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        {/*<div style={{ width: '100%' }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div> */}
      </div>
      <Bottombar />
    </>
  )
}

export default Layout
