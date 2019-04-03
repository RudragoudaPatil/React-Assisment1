import React, { Component } from 'react';

 import './Search.css';
 import ProductDetails from './ProductDetails'
 import './ProductImage.css';

export default class Products extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0,
            products:[
                {
                    "itemId":426185816,
                    "name":"Best Choice Products",
                    "shortDescription":"Adventure awaits your children with this ride-on truck! Let them cruise along with in-car steering while they jam out to their favorite tunes.",
                    "mediumImage":"https://i5.walmartimages.com/asr/164e191b-699f-47a8-94bf-ff5ba84196b8_1.ae5d714d508b8df2c8d041fc43280e0c.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
                    "salePrice":119.99,
                },
                {
                    "itemId":21984627,
                    "name":"Hot Wheels 9-Car Gift Pack Collection (Styles May Vary)",
                    "salePrice":9.47,
                    "shortDescription":"Help expand your little one's toy collection with the Hot Wheels 9-Pack Cars set. Whether your boy is adding to his arsenal or just starting to build his own, this package features exclusive graphics and designs that will surely excite any fan. This Hot Wheels gift pack features an interesting mix of cars and trucks in a variety of colors.",
                    "mediumImage":"https://i5.walmartimages.com/asr/85384b98-5da2-48a8-9147-a3f59cb4a94d_1.7b8b27224a37320e92ea70dca2ee15ce.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
                }
            ]
          
        } 
    }
  
    render(){
        let listOfProducts='';
        if(this.props.search==''){
            listOfProducts = this.state.products.map((product,index)=>{
                return <ProductDetails key={index} details={product} add={this.props.add} delete={this.props.delete}/>
        })
        }else{
            let filterProducts = this.state.products.filter((product,index)=>{
             return product.name.includes(this.props.search)
        });
        listOfProducts = filterProducts.map((product,index)=>{
            return <ProductDetails key={index} details={product} add={this.props.add} delete={this.props.delete}/>
    });
}
        return(
           <div>
            {listOfProducts}
           </div>
      
        )
    }
}

