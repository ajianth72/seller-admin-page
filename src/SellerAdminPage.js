import React, { useState } from 'react';
import './SellerAdminPage.css';

function SellerAdminPage() {
  const [projectId, setProjectId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [electronicItems, setElectronicItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [skincareItems, setSkincareItems] = useState([]);

  const handleProjectIdChange = (event) => {
    setProjectId(event.target.value);
  };

  const handleSellingPriceChange = (event) => {
    setSellingPrice(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddProduct = () => {
    const product = { projectId, sellingPrice, productName };

    switch (category) {
      case 'Electronic Items':
        setElectronicItems([...electronicItems, product]);
        break;
      case 'Food Items':
        setFoodItems([...foodItems, product]);
        break;
      case 'Skincare Items':
        setSkincareItems([...skincareItems, product]);
        break;
      default:
        break;
    }

    setProjectId('');
    setSellingPrice('');
    setProductName('');
    setCategory('');
  };

  const handleDeleteProduct = (categoryId, projectId) => {
    switch (categoryId) {
      case 'Electronic Items':
        setElectronicItems(electronicItems.filter((product) => product.projectId !== projectId));
        break;
      case 'Food Items':
        setFoodItems(foodItems.filter((product) => product.projectId !== projectId));
        break;
      case 'Skincare Items':
        setSkincareItems(skincareItems.filter((product) => product.projectId !== projectId));
        break;
      default:
        break;
    }
  };

  return (
    <>
    <div>
      <label htmlFor="projectId">ProjectID:</label>
      <input type="text" id="projectId" value={projectId} onChange={handleProjectIdChange} />

      <label htmlFor="sellingPrice">Selling Price:</label>
      <input type="text" id="sellingPrice" value={sellingPrice} onChange={handleSellingPriceChange} />

      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" value={productName} onChange={handleProductNameChange} />

      <label htmlFor="category">Choose a category:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="">--Select a category--</option>
        <option value="Electronic Items">Electronic Items</option>
        <option value="Food Items">Food Items</option>
        <option value="Skincare Items">Skincare Items</option>
      </select>

      <button onClick={handleAddProduct}>Add Product</button>

      <h1>Products</h1>

      <h2>Electronic Items</h2>
      <ul>
        {electronicItems.map((product) => (
          <li key={product.projectId}>
            {product.projectId} - Electronic - {product.productName} - {product.sellingPrice}
            <button onClick={() => handleDeleteProduct('Electronic Items', product.projectId)}>Delete</button>
            </li>
        ))}
        </ul>
        <h2>Food Items</h2>
        <ul>
        {foodItems.map((product) => (
          <li key={product.projectId}>
            {product.projectId} - Food - {product.productName} - {product.sellingPrice}
            <button onClick={() => handleDeleteProduct('Food Items', product.projectId)}>Delete</button>
            </li>
        ))}
        </ul>
        <h2>Skincare Items</h2>
        <ul>
        {skincareItems.map((product) => (
          <li key={product.projectId}>
            {product.projectId} - Skincare - {product.productName} - {product.sellingPrice}
            <button onClick={() => handleDeleteProduct('Skincare Items', product.projectId)}>Delete</button>
            </li>
        ))}
        </ul>
        </div>
        </>
  )
        }



export default SellerAdminPage;

