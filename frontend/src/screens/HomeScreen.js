import './HomeScreen.css';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

//components
import Product from '../components/Product'

//Actions
import {getProducts as listProducts} from '../redux/actions/productActions'



const HomeScreen=()=>{

     const dispatch = useDispatch();

     //data of store.js
     const getProducts = useSelector(state => state.getProducts);
     //after getting get products I want destructure it 
     const {products,loading,error}=getProducts;

     useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);


    return(
        <div className="homescreen" >
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
               {loading?<h2>loading...</h2>:error?<h2>{error}</h2> :products.map(product=>(
                   <Product key={product._id}
                   productId={product._id}
                   name={product.name}
                   price={product.price}
                   description={product.description}
                   imageurl={product.imageUrl}/>
               ))}
            </div>
        </div>
    )
}
export default HomeScreen