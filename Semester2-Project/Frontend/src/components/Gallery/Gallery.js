import React,{Component} from 'react';
import {
        Container,
        Row} from 'reactstrap'
import Name from './Product';

class Home extends Component {
    constructor() {
        super();
        this.state={
            products:[]
        };
}
componentDidMount() {
    fetch('http://localhost:5000/products/get')
      .then(res => res.json())
      .then(products => this.setState({ products }, () => console.log('images fetched...', products)));
  }
 Products(){
    return this.state.products.map(data => {
        return ( <div key={data.image} className="col-lg-3 col-sm-12 col-md-6">
            <Name link={data.link} image={data.image} name={data.name} hint={data.hint} />
        </div>)
    });
 }

  render() {
      //
      return (
          <Container fluid={true}>
<img src="https://cdn.shopify.com/s/files/1/2675/7366/files/Children.jpg?v=1590600274" width="1310px" height="200px"> 
            </img><br></br><br></br><br></br>
        <hr></hr>
        

            <img src="https://cdn.shopify.com/s/files/1/2675/7366/files/ship_globally_banner_1600x250_dd74d755-cb23-4bbb-ae7f-b186598d290a.jpg?v=1585630811" width="1310px" height="200px">
            </img><br></br>
            <Row>
                <br></br><br></br><br></br>
            </Row>
            <h3>AWESOME GIFTS ARE AVAILABLE HERE..........</h3>

            <Row>
          {this.Products()}
          </Row>
          </Container>
      );
  }
}
export default Home;
