import React from 'react'
import book from '../Images/books.jpg'
import book1 from '../Images/books1.jpg'
import { useNavigate } from 'react-router-dom'
import styles from '../Styles/Home.module.css'

const buttonDesp = {
  margin: '5% 0 0',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '40px',
  flexDirection: 'column',
  alignItems: 'center'
}

const button = {
  background: 'linear-gradient(to right, #ffffff, rgb(255 125 0))',
  fontWeight: '900',
  fontSize: '32px',
  padding: '20px',
  marginTop: '5px',
  borderRadius: '5px',
  color: '#000',
  marginBottom: '10%',
  cursor: 'pointer'

}

export const Home = () => {

  const navigate = useNavigate();

  return (
    <>

      <div className={styles.homeBody}>
          <div className={styles.part}>
            <img src={book} width="30%" height="30%" alt="logo" />
            <div className={styles.card}>
              Reading books helps in making one’s vocabulary and literacy skills strong. Reading a variety of content writing books can help one understand thoroughly the use of words and phrases, the meaning of certain words and the ways to convey a purpose.

              Every writer has their own style to convey a message or a purpose on which the book is being written, therefore reading numerous content writing books can help one understand the intensity at which novels and other books convey their purpose.

              Many times there are writers stuck even after writing the main plot of their book, they find it difficult to write the perfect ending for it, reading books can help it to another level.
            </div>
          </div>
          <div className={styles.part}>
            <div className={styles.card}>
              <b>How Do Content Writing Books Help - </b>
              These content writing books are loaded with information based on many valuable case studies done by experienced and successful content writers.

              The terms at which content writing was used decades ago could be changed but the fundamental idea behind a content that serves a purpose will remain the same.

              Therefore these books written by great authors and also companies that have been providing content writing course for a remarkable period of time who continuously make efforts to dissect the concept of content writing, therefore, defining new terms in which content writing could be used effectively and profitably.

              Content writing books are a direct source of content writing tips and tricks that can help a writer develop their skills on this specific domain.
            </div>
            <img src={book1} width="30%" height="30%" alt="logo" />

          </div>
        <div style={buttonDesp}>
          <div>Here are some of the books from <b>Reading Garden</b>.....</div>
          <button onClick={() => navigate('books-list')} style={button}> Books List</button>
        </div>
      </div>


    </>
  )
}
