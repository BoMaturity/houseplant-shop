import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductList.css';

const plants = [
  { 
    id: 1, 
    name: 'Monstera Deliciosa', 
    price: 25, 
    category: 'Indoor', 
    image: 'https://plantersplace.com/wp-content/uploads/2022/08/20200309_110255-300x300.jpg',
    description: 'Swiss cheese plant, perfect for indoor decoration'
  },
  { 
    id: 2, 
    name: 'Ficus Lyrata', 
    price: 35, 
    category: 'Indoor', 
    image: 'https://www.plantstudio.ae/cdn/shop/files/e1e85048ffbfbf2e89d4afb84709b19d.jpg',
    description: 'Fiddle leaf fig, creates a focal point for any space'
  },
  { 
    id: 3, 
    name: 'Cactus Mix', 
    price: 15, 
    category: 'Succulent', 
    image: 'https://www.thompson-morgan.com/product_images/100/optimised/cact.jpg',
    description: 'Diverse cactus collection, easy to care for'
  },
  { 
    id: 4, 
    name: 'Aloe Vera', 
    price: 18, 
    category: 'Succulent', 
    image: 'https://www.niehs.nih.gov/sites/default/files/health/assets/images/aloe_leaf.jpg',
    description: 'Aloe vera, beauty benefits and air purification'
  },
  { 
    id: 5, 
    name: 'Snake Plant', 
    price: 22, 
    category: 'Air Purifying', 
    image: 'https://media.houseandgarden.co.uk/photos/6736030759a56cf43ffed622/master/w_1600,c_limit/517540986',
    description: 'Sansevieria, highly effective air purifier'
  },
  { 
    id: 6, 
    name: 'ZZ Plant', 
    price: 28, 
    category: 'Air Purifying', 
    image: 'https://cdn.shopify.com/s/files/1/0621/8157/2697/files/j4n51fiogdefvkhgxk2a.jpg?v=1738155809',
    description: 'Zamioculcas, brings luck and prosperity'
  },
  { 
    id: 7, 
    name: 'Peace Lily', 
    price: 20, 
    category: 'Air Purifying', 
    image: 'https://cdn11.bigcommerce.com/s-fr32feerow/images/stencil/832x750/uploaded_images/peace-lily-01.jpg?t=1483630233',
    description: 'Spathiphyllum, beautiful flowers and excellent air purifier'
  },
  { 
    id: 8, 
    name: 'Pothos Golden', 
    price: 16, 
    category: 'Indoor', 
    image: 'https://nouveauraw.com/wp-content/uploads/2020/01/Pothos-Golden-Pothos-plant-800-great-coloring.png',
    description: 'Golden pothos, easy to grow and maintain'
  }
];

export default function ProductList() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const isInCart = id => cartItems.find(item => item.id === id);

  const categories = ['All', 'Indoor', 'Succulent', 'Air Purifying'];

  const filteredPlants = plants.filter(plant => {
    const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    // Add feedback effect
    const button = document.querySelector(`[data-plant-id="${plant.id}"]`);
    if (button) {
      button.classList.add('added');
      setTimeout(() => button.classList.remove('added'), 1000);
    }
  };

  return (
    <div className="product-list-page">
      <div className="product-header">
        <h1>Explore Plants</h1>
        <p>Choose the most beautiful plants for your home</p>
      </div>

      <div className="filters-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredPlants.map(plant => (
          <div key={plant.id} className="product-card">
            <div className="product-image">
              <img src={plant.image} alt={plant.name} />
              <div className="product-overlay">
                <button
                  className={`add-to-cart-btn ${isInCart(plant.id) ? 'in-cart' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                  data-plant-id={plant.id}
                >
                  {isInCart(plant.id) ? '✓ Added' : '+ Add to Cart'}
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{plant.name}</h3>
              <p className="product-description">{plant.description}</p>
              <div className="product-meta">
                <span className="product-category">{plant.category}</span>
                <span className="product-price">${plant.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPlants.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">🌱</div>
          <h3>No products found</h3>
          <p>Try searching with different keywords or select another category</p>
        </div>
      )}
    </div>
  );
}
