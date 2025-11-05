'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>

      <div className={`${styles.container} ${mounted ? styles.fadeIn : ''}`}>
        <div className={styles.glowOrb}></div>

        <div className={styles.content}>
          <div className={styles.errorCode}>
            <span className={styles.digit}>4</span>
            <div className={styles.gearContainer}>
              <div className={styles.gear}></div>
              <div className={styles.gear2}></div>
            </div>
            <span className={styles.digit}>4</span>
          </div>

          <h1 className={styles.title}>
            الموقع قيد التطوير حالياً
          </h1>

          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerDot}></div>
            <div className={styles.dividerLine}></div>
          </div>

          <p className={styles.message}>
            نعمل بجد لإنشاء تجربة رائعة لك
            <br />
            <span className={styles.highlight}>الرجاء العودة قريباً</span>
          </p>

          <div className={styles.socialLinks}>
            <a
              href="https://t.me/MohamedDzLa"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.telegramBtn}
            >
              <svg className={styles.telegramIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-1.969 9.27-2.644 12.304-.286 1.285-.849 1.714-1.394 1.757-.593.048-1.042-.392-1.617-.77-1.297-.853-2.03-1.384-3.29-2.215-1.456-.961-.513-1.49.318-2.353.218-.226 4.007-3.67 4.081-3.983.009-.039.018-.182-.068-.258-.087-.076-.215-.05-.307-.03-.131.03-2.216 1.408-6.255 4.137-.592.407-1.128.605-1.608.593-.529-.012-1.547-.298-2.304-.544-.929-.301-1.667-.461-1.603-.972.033-.267.399-.54 1.098-.82 4.303-1.877 7.172-3.115 8.608-3.715 4.099-1.708 4.953-2.005 5.51-2.014.122-.002.395.028.572.172.15.121.191.284.211.4.019.116.043.381.024.588z"/>
              </svg>
              تواصل معنا على تيليجرام
            </a>
            <a
              href="https://t.me/RabieSuse"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.telegramBtn}
            >
              <svg className={styles.telegramIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-1.969 9.27-2.644 12.304-.286 1.285-.849 1.714-1.394 1.757-.593.048-1.042-.392-1.617-.77-1.297-.853-2.03-1.384-3.29-2.215-1.456-.961-.513-1.49.318-2.353.218-.226 4.007-3.67 4.081-3.983.009-.039.018-.182-.068-.258-.087-.076-.215-.05-.307-.03-.131.03-2.216 1.408-6.255 4.137-.592.407-1.128.605-1.608.593-.529-.012-1.547-.298-2.304-.544-.929-.301-1.667-.461-1.603-.972.033-.267.399-.54 1.098-.82 4.303-1.877 7.172-3.115 8.608-3.715 4.099-1.708 4.953-2.005 5.51-2.014.122-.002.395.028.572.172.15.121.191.284.211.4.019.116.043.381.024.588z"/>
              </svg>
              تواصل على تيليجرام
            </a>
          </div>

          <div className={styles.loader}>
            <div className={styles.loaderDot}></div>
            <div className={styles.loaderDot}></div>
            <div className={styles.loaderDot}></div>
          </div>

          <p className={styles.thankyou}>
            شكراً لتفهمكم وصبركم
          </p>
        </div>

        <div className={styles.floatingElements}>
          <div className={styles.floatingCircle} style={{left: '10%', top: '20%'}}></div>
          <div className={styles.floatingCircle} style={{right: '15%', top: '40%'}}></div>
          <div className={styles.floatingCircle} style={{left: '20%', bottom: '30%'}}></div>
          <div className={styles.floatingCircle} style={{right: '10%', bottom: '20%'}}></div>
        </div>
      </div>
    </main>
  )
}
