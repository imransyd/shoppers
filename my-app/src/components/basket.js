import React, { Component } from 'react';
import '../App.css';


export default class Basket extends Component {
  render() {
      let list = this.props.basketItems.map((item,index)=>{
          return (
            <li key={index}>
                <p>{item.title}</p>
                <p>:-{item.price}</p>
            </li>
          );
      });

    return (
        <div className="basket">
            <p>I'm the basket</p>
            <ul>
                {list}
            </ul>
        </div>
    );
  }
}

