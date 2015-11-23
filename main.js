document.write(require("./content.js"));

var ReactDOM = require('react-dom'),
    React = require('react'),
    TitleComponent = require('./TitleComponent.js'),
    FilterableProductTable = require('./FilterableProductTable.js'),
    PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];

ReactDOM.render(
    <TitleComponent name="Viewer"/>,
    document.getElementById('main')
);

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('container')
);
