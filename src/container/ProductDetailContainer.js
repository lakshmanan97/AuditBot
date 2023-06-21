import React,{Component,Fragment} from 'react';
import * as action from '../store/actions/index'
import {connect} from 'react-redux'
import ProductDetailComponent from '../component/ProductDetailComponent'
import ProductDetailImage from '../component/ProductDetailImage'
import Grid from '@material-ui/core/Grid';


class ProductDetailContainer extends Component{


     componentDidMount(){
       this.props.fetchProductById(this.props.match.params.id);
        
      }

      render(){
      
        return( 
            <Fragment >
            
              {this.props.productDetail?   
               <Grid container style={{marginTop:90,marginLeft:20,marginRight:20}} spacing={0}>
               <Grid item md={4} >
               <ProductDetailImage  image={this.props.productDetail.images[0]}/>
              </Grid>
              <Grid item md={7} >
              <ProductDetailComponent description={this.props.productDetail.description}/>
              </Grid>
              </Grid>
             
            
             :null} 
            </Fragment>
    
      )
    
    }
    
    }
    
    const mapStateToProps = state=>{

        return{
            productDetail:state.product.productDetail
        };
    };
    
    const mapDispatchTpProps=dispatch=>{
     
        return{
            fetchProductById:(id)=>{dispatch(action.fetchProductById(id))}
        };
    }
 export default connect(mapStateToProps,mapDispatchTpProps)(ProductDetailContainer);




