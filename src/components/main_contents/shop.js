import React from "react";

function ProductTable(props){
    let id = 0;
    const productList = props.products.map((product) => 
        <tr>
            <td>{++id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><button onClick={() => props.clickEvent(product)}>담기</button></td>
        </tr>
    );

    return (
    <div className="productList" style={{marginTop:"3rem"}}>
        <h1>물품 리스트</h1>
        <table>
            <th>ID</th>
            <th>물품명</th>
            <th>가격</th>
            <th>남은 수량</th>
            <th>담기</th>
            {productList}
        </table>
    </div>
    );
}

function ShopBasketTable(props) {
    const shopList = props.shopList.map((item) =>
        <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td><button onClick={() => {props.clickEvent(item)}}>빼기</button></td>
        </tr>

    )
  return (
    <div className="shopList" style={{marginTop:"3rem"}}>
        <h1>장바구니 리스트</h1>
        <table>
            <th>물품명</th>
            <th>구매 수량</th>
            <th>총 가격</th>
            <th>빼기</th>
            {shopList}
        </table>
    </div>
  );
}


class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName : "NONE",
            shopList : []
        }

        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    addProduct(item){

        let itemDto = {name : item.name, price : item.price, quantity : 1};
        this.setState({
            shopList : this.state.shopList.concat(itemDto)
        })
    }
    
    removeProduct(item){
        this.state.shopList.forEach((shop) => {
            if(shop.name === item.name){
                shop.quantity -= 1;
            }
        })
    }

    render(){
        const productList = [
            {name : "사과", price : 3000, quantity : 30},
            {name : "바나나", price : 3000, quantity : 25},
            {name : "수박", price : 15000, quantity : 10},
            {name : "체리", price : 6000, quantity : 14},
            {name : "멜론", price : 20000, quantity : 7},
        ]
        
        return(
            <div className="content">
                <h1> USER : {this.state.userName} </h1>
                <ProductTable products={productList} clickEvent={this.addProduct}/>
                <ShopBasketTable shopList={this.state.shopList} clickEvent={this.removeProduct}/>
            </div>
        );
    }
}

export default Shop;