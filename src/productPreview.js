import React from 'react'
import styles from './ProductPreview.module.css'

function productPreview(props) {
    const currentHour= new Date().getHours()>9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute =new Date().getMinutes()>9 ? new Date().getMinutes() : '0'+ new Date().getMinutes();

  return (
    <div className={styles.ProductPreview}>
        <img src={props.currnetPreviewImage} alt='Image Production'/>

        {
          props.currentSelectedFeature===1 ?
          <div className={styles.HeartBeatSection}>
          <img src='https://cdn-icons.flaticon.com/png/512/1818/premium/1818145.png?token=exp=1660738704~hmac=378651fb9933522ab2e1b3b21fdc944f'/>
          <p>78</p>
          </div>
          :
          <div className={styles.timeSection}>
            <p>{`${currentHour}:${currentMinute}`}</p>
          </div>
        }

        
        <div className={styles.HeartBeatSection}>
         <img src='https://cdn-icons.flaticon.com/png/512/1818/premium/1818145.png?token=exp=1660738704~hmac=378651fb9933522ab2e1b3b21fdc944f'/>
         <p>78</p>
        </div>

    </div>
  )
}

export default productPreview