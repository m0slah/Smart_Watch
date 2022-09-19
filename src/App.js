import styles from './App.module.css';
import ProductPreview from './productPreview';
import ProductDetail from './ProductDetail';
import Topbar from './Topbar';
import { Component } from 'react';
import ProductData from './ProdactData';

class App extends Component{

    state={
      ProductData:ProductData,
      currnetPreviewImagePos:0,
      currentSelectedFeature:0,
    }

    onColoroptionClick =(pos) =>{
      this.setState({currnetPreviewImagePos: pos});
    }

    onFeatureItemClick=(pos)=>{
      
      this.setState({ currentSelectedFeature:pos});
    }

  render(){
    return (
      <div className={styles.App}>
          <Topbar/>
      <div className={styles.MainContainer}>

        <div className={styles.ProductPreview}>
           <ProductPreview  currnetPreviewImage={this.state.ProductData.colorOptions[this.state.currnetPreviewImagePos].imageUrl} 
           currentSelectedFeature={this.state.currentSelectedFeature}/>
        </div>

        <div className={styles.ProductData}>
          <ProductDetail data={this.state.ProductData} 
            onColoroptionClick={this.onColoroptionClick}
           currnetPreviewImagePos={this.state.currnetPreviewImagePos}
           onFeatureItemClick={this.onFeatureItemClick}
           currentSelectedFeature={this.currentSelectedFeature}/>
        </div>
      </div>
      </div>  
    );
  }
}

export default App;
  