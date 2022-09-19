import React from 'react';
import styles from './ProductDetail.module.css';

function ProductDetail(props){

  const colorOptions=props.data.colorOptions.map((item,pos)=>{
    const classArr=[styles.productImage]

    if(pos===props.currnetPreviewImagePos){
        classArr.push(styles.selectedProductImage);
    }
    return (
      <img key={pos} className={classArr.join(' ') } src={item.imageUrl} alt={item.styleName}
       onClick={()=> props.onColoroptionClick(pos)}/>
      
    );
  })

  const featureList=props.data.featureList.map((item,pos)=>{
  const  classArr=[styles.featureItem];

    if (pos===1 && props.currentSelectedFeature){
      classArr.push(styles.selectedFeatureItem);
    }
    
    return (
      <button onClick={()=>props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
      );
  });

  return (
    <div className={styles.ProductData}>
        <h1 className={styles.productTitle}>{props.data.title}</h1>
        <p className={styles.productDescription}>{props.data.description}</p>
        <h3 className={styles.sectionHeading}>Select Color</h3>
        
        <div>
          {colorOptions}
            {/* <img className={[styles.ProductImg , styles.selectedProductImage].join(' ')} src='https://imgur.com/iOeUBV7.png' alt='Select Black Color'/>
            <img className={[styles.ProductImg , styles.selectedProductImage]} src='https://imgur.com/PTgQlim.png' alt='Select Red Color'/>
            <img className={[styles.ProductImg , styles.selectedProductImage]} src='https://imgur.com/Mplj1YR.png' alt='Select Blue Color'/>
            <img className={[styles.ProductImg , styles.selectedProductImage]} src='https://imgur.com/xSIK4M8.png' alt='Select marron Color'/> */}
        </div>

        
        <h3 className={styles.sectionHeading}>Features</h3>
        <div>{featureList}</div>
        


        <button className={styles.primaryButton}>Buy Now</button>
    </div>
  )
}

export default ProductDetail;
