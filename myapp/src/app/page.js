import styles from '@/styles/home.module.css';
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className={styles.articleList}>
          <div className={styles.article}>
              <Image 
                height="1080"
                width="1080"
                src="/article1.png" 
                alt="Image relevant of article 1" 
              />
              <h2>Title of article 1</h2>
              <p>Lorem Ipsum ...</p>
          </div>
          <div className={styles.article}>
              <Image                   
                  height="1080"
                  width="1080"
                  src="/article2.png" 
                  alt="Image relevant of article 2" 
              />
              <h2>Title of article 2</h2>
              <p>Lorem Ipsum ...</p>
          </div>
        </div>
      </div>
  </main>
  )
}

