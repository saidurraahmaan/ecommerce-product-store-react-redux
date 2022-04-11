import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import {useEffect} from "react";
import {setProducts} from "../redux/actions/productActions";


const ProductListing = ()=>{
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();


    const fetchProducts =async ()=>{
        const response  = await axios
            .get("https://fakestoreapi.com/products")
            .catch(err=>console.error(err))
        dispatch(setProducts(response.data));
    }
    useEffect(()=>{
        fetchProducts();
    },[])

    console.log(products)
    return(
        <div className='ui grid container' style={{marginTop:"10px"}}>
            <ProductComponent/>
        </div>
    );
}
export default ProductListing;