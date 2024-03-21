import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {message} from 'antd'
function Product() {
  const [showForm, setShowForm] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [file, setfile] = useState(null)
  const [productDetails, setProductDetails] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productList, setProductList] = useState([]);
  const[del,setdel] = useState(false)

  const toggleProductForm = () => {
    setShowForm(!showForm);
  };


 
  const handleimage = (e) => {
    console.log("changed image");
    const selectfile = e.target.files[0]
    setProductImage(selectfile)
    setfile(selectfile)
    console.log("file2", file);
  }
  const submitdata = async (e) => {

    e.preventDefault();
    console.log("entered");
    try {
      if (productName && productPrice && productDetails && productImage) {
        console.log("try");
        const reader = new FileReader();
        reader.onload = () => {
          const productData = {
            name: productName,
            price: productPrice,
            details: productDetails,
            image: reader.result,
          };
          setProductList([...productList, productData]);
          message.success("Product added successfully")
        };
        reader.readAsDataURL(productImage);
        // Clear form fields after adding the product
        setProductName('');
        setProductPrice('');
        setProductDetails('');
        setProductImage(null);

        // Sending data to backend
       
        const payload = {
          name: productName,
          price: productPrice,
          details: productDetails
        };

        const response = await axios.post(
          "https://task-l14o.onrender.com/postdata",
          payload
        );

        const productId = response.data.data._id;

        if (response.data.success) {
          console.log("success created");
          // setfile(productImage);


        } else {
          throw new Error(response.data.message);
        }

        if (file) {
          console.log("file1", file);
          const formData = new FormData();
          formData.append("file", file);
          formData.append("productId", productId);
          console.log("formdata", formData);

          const response = await axios.post(
            "https://task-l14o.onrender.com/update-upload",
            formData
          );

          if (response.data.success) {
           
            setfile(null);
            console.log("success upload image");
            
          }
        }
        
      }
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  
  

  useEffect(()=>{
    const fetchdata = async()=>{
      const res = await axios.get('https://task-l14o.onrender.com')
      console.log("get data",res.data.data);
      // setdatas(res.data.data)
      setProductList(res.data.data)

    }
    fetchdata()
  },[del])

  const handleaddtocart = () => {
    message.success("Product added to cart")
  }

  const handledatadelete = async(id)=>{
    console.log("handledatadelete",id);
    const res = await axios.delete(`https://task-l14o.onrender.com/delete/${id}`)
    setdel(!del)
    console.log("deleted");
    message.success("Product deleted successfully")
    
  }
  return (
    <div className="container mt-5">
      <h1 className="text-uppercase justify-content-center text-center" id="product">
        <b>Product</b>
      </h1>
      <br />
      {/* Button to toggle product form visibility */}
      <button type="button" className="btn btn-primary mb-3" id="toggle-form-btn" onClick={toggleProductForm}>
        {showForm ? 'Hide Form' : 'Add Product'}
      </button>

      {/* Product form */}
      {showForm && (
        <form id="product-form">
          <div className="form-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="product-name"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="number"
              className="form-control"
              id="product-price"
              placeholder="Enter price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="product-details">Details</label>
            <textarea
              className="form-control"
              id="product-details"
              placeholder="Enter product details"
              value={productDetails}
              onChange={(e) => setProductDetails(e.target.value)}
              required
            ></textarea>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="product-image" className="">
              Image
            </label>
            <input
              type="file"
              className="form-control-file"
              id="product-image"
              accept="image/*"
              onChange={handleimage}
              required
            />
          </div>
          <br />
          <button type="button" className="btn btn-primary" onClick={submitdata}>
            Add Product
          </button>
        </form>
      )}
     
      <div className="mt-3 row" id="product-container">
        {/* Product items */}
        {productList && productList.map((product) => (
          <div key={product._id} className="col-sm-6 col-lg-3 top justify-content-center text-center mt-5">
            <img className="img-fluid object-cover" src={product.image} alt="" style={{ height: '70%', width: '70%' }} />
            <h4 className="text-uppercase text-center">{product.name}</h4>
            <h6 className="text-center">$ {product.price}</h6>
            <p className="text-center">{product.details}</p>
            <p className="icon text-center">
              <span>
                <i className="far fa-heart"></i>
              </span>
              <span>
                <i id="gap" className="far fa-share-square" title="Share"></i>
              </span>
              <span>
                <i id="gap" className="fas fa-shopping-basket"></i>
              </span>
            </p>
            <div className="text-center mb-5">
              <button className="btn btn-danger" onClick={()=>handledatadelete(product._id)}>Delete</button>
              <button className="btn btn-success ml-5" onClick={handleaddtocart}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

     
      


    </div>
  );
}

export default Product;
