import React, { useState } from 'react';
import './styles.css';
import { FaMinus, FaPlus, FaTrash, FaChevronDown, FaChevronUp, FaShoppingBasket } from 'react-icons/fa';

// Import images
import paneerRollImage from './paneer-roll.jpeg';
import momosImage from './momos.jpeg';
import chowMeinImage from './chow-mein.jpeg';
import gulabJamunImage from './gulab-jamun.jpeg';
import samosaImage from './samosa.jpeg';
import paneerButterMasalaImage from './paneer-butter-masala.jpeg';
import biryaniImage from './biryani.jpeg';
import rajmaChawalImage from './rajma-chawal.jpeg';
import palakPaneerImage from './palak-paneer.jpeg';
import dalMakhaniImage from './dal-makhani.jpeg';
import dosaImage from './dosa.jpeg';
import idliImage from './idli.jpeg';
import pavBhajiImage from './pav-bhaji.jpeg';
import choleBhatureImage from './chole-bhature.jpeg';
import rasMalaiImage from './ras-malai.jpeg';
import jalebiImage from './jalebi.jpeg';
import malaiKoftaImage from './malai-kofta.jpeg';
import pulaoImage from './pulao.jpeg';
import alooTikkiImage from './aloo-tikki.jpeg';
import fruitSaladImage from './fruit-salad.jpeg';

const App = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Full Paneer Roll', nameHi: 'पनीर रोल', description: 'Delicious paneer roll', descriptionHi: 'स्वादिष्ट पनीर रोल', category: 'maincourse', quantity: 0, image: paneerRollImage, price: 150, priceHi: 150 },
    { id: 2, name: 'Momos', nameHi: 'मोमोज़', description: 'Steamed momos', descriptionHi: 'स्टीम्ड मोमोज़', category: 'fastfood', quantity: 0, image: momosImage, price: 80, priceHi: 80 },
    { id: 3, name: 'Veg Chow Mein', nameHi: 'वेज चाउमीन', description: 'Stir-fried noodles', descriptionHi: 'तले हुए नूडल्स', category: 'chinese', quantity: 0, image: chowMeinImage, price: 100, priceHi: 100 },
    { id: 4, name: 'Gulab Jamun', nameHi: 'गुलाब जामुन', description: 'Sweet syrupy dessert', descriptionHi: 'मीठा सिरपयुक्त मिठाई', category: 'dessert', quantity: 0, image: gulabJamunImage, price: 120, priceHi: 120 },
    { id: 5, name: 'Samosa', nameHi: 'समोसा', description: 'Fried pastry with filling', descriptionHi: 'भरावन के साथ तली हुई पेस्ट्री', category: 'starters', quantity: 0, image: samosaImage, price: 70, priceHi: 70 },
    { id: 6, name: 'Paneer Butter Masala', nameHi: 'पनीर बटर मसाला', description: 'Paneer in creamy tomato sauce', descriptionHi: 'क्रीमी टमाटर सॉस में पनीर', category: 'maincourse', quantity: 0, image: paneerButterMasalaImage, price: 150, priceHi: 150 },
    { id: 7, name: 'Biryani', nameHi: 'बिरयानी', description: 'Fragrant rice dish with spices', descriptionHi: 'मसालों के साथ सुगंधित चावल की डिश', category: 'ricedishes', quantity: 0, image: biryaniImage, price: 200, priceHi: 200 },
    { id: 8, name: 'Rajma Chawal', nameHi: 'राजमा चावल', description: 'Kidney beans curry with rice', descriptionHi: 'राजमा करी चावल के साथ', category: 'ricedishes', quantity: 0, image: rajmaChawalImage, price: 180, priceHi: 180 },
    { id: 9, name: 'Palak Paneer', nameHi: 'पालक पनीर', description: 'Spinach with cottage cheese', descriptionHi: 'पनीर के साथ पालक', category: 'maincourse', quantity: 0, image: palakPaneerImage, price: 130, priceHi: 130 },
    { id: 10, name: 'Dal Makhani', nameHi: 'दाल मखनी', description: 'Rich lentil curry', descriptionHi: 'मसालेदार दाल करी', category: 'maincourse', quantity: 0, image: dalMakhaniImage, price: 150, priceHi: 150 },
    { id: 11, name: 'Dosa', nameHi: 'डोसा', description: 'South Indian crepe', descriptionHi: 'दक्षिण भारतीय क्रेप', category: 'fastfood', quantity: 0, image: dosaImage, price: 90, priceHi: 90 },
    { id: 12, name: 'Idli', nameHi: 'इडली', description: 'Steamed rice cakes', descriptionHi: 'स्टीम्ड चावल केक', category: 'starters', quantity: 0, image: idliImage, price: 80, priceHi: 80 },
    { id: 13, name: 'Pav Bhaji', nameHi: 'पाव भाजी', description: 'Spiced vegetable mash with bread', descriptionHi: 'मसालेदार सब्जी मैश के साथ ब्रेड', category: 'fastfood', quantity: 0, image: pavBhajiImage, price: 120, priceHi: 120 },
    { id: 14, name: 'Chole Bhature', nameHi: 'छोले भटूरे', description: 'Spicy chickpeas with fried bread', descriptionHi: 'मसालेदार छोले तली हुई ब्रेड के साथ', category: 'maincourse', quantity: 0, image: choleBhatureImage, price: 170, priceHi: 170 },
    { id: 15, name: 'Ras Malai', nameHi: 'रास मलाई', description: 'Sweet paneer in creamy sauce', descriptionHi: 'क्रीमी सॉस में मीठा पनीर', category: 'dessert', quantity: 0, image: rasMalaiImage, price: 150, priceHi: 150 },
    { id: 16, name: 'Jalebi', nameHi: 'जलेबी', description: 'Sweet crispy spirals', descriptionHi: 'मीठे कुरकुरे स्पाइरल्स', category: 'dessert', quantity: 0, image: jalebiImage, price: 100, priceHi: 100 },
    { id: 17, name: 'Malai Kofta', nameHi: 'मलाई कोफ्ता', description: 'Creamy curry with paneer dumplings', descriptionHi: 'पनीर के कोफ्ते के साथ क्रीमी करी', category: 'maincourse', quantity: 0, image: malaiKoftaImage, price: 160, priceHi: 160 },
    { id: 18, name: 'Pulao', nameHi: 'पुलाव', description: 'Rice cooked with vegetables and spices', descriptionHi: 'सब्जियों और मसालों के साथ पकाया हुआ चावल', category: 'ricedishes', quantity: 0, image: pulaoImage, price: 120, priceHi: 120 },
    { id: 19, name: 'Aloo Tikki', nameHi: 'आलू टिक्की', description: 'Spiced potato patties', descriptionHi: 'मसालेदार आलू के टिक्के', category: 'starters', quantity: 0, image: alooTikkiImage, price: 90, priceHi: 90 },
    { id: 20, name: 'Fruit Salad', nameHi: 'फ्रूट सलाद', description: 'Fresh mixed fruit salad', descriptionHi: 'ताजे मिश्रित फलों का सलाद', category: 'dessert', quantity: 0, image: fruitSaladImage, price: 130, priceHi: 130 },
  ]);

  const [basket, setBasket] = useState([]);
  const [showBasket, setShowBasket] = useState(false);
  const [isHindi, setIsHindi] = useState(false);

  const handleAdd = (item) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((basketItem) => basketItem.id === item.id);
      if (existingItem) {
        return prevBasket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        );
      } else {
        return [
          ...prevBasket,
          { ...item, quantity: 1 }
        ];
      }
    });
  };

  const handleRemove = (item) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((basketItem) => basketItem.id === item.id);
      if (existingItem.quantity === 1) {
        return prevBasket.filter((basketItem) => basketItem.id !== item.id);
      } else {
        return prevBasket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity - 1 }
            : basketItem
        );
      }
    });
  };

  const handleToggleBasket = () => {
    setShowBasket((prev) => !prev);
  };

  const handleToggleLanguage = () => {
    setIsHindi((prev) => !prev);
  };

  const calculateTotal = () => {
    return basket.reduce((total, item) => total + (isHindi ? item.priceHi : item.price) * item.quantity, 0);
  };

  return (
    <div className="App">
      <header>
        <button onClick={handleToggleLanguage}>
          {isHindi ? 'Switch to English' : 'हिंदी में स्विच करें'}
        </button>
        <button className="basket-button" onClick={handleToggleBasket}>
          <FaShoppingBasket /> {showBasket ? 'Close Basket' : `Basket (${basket.reduce((total, item) => total + item.quantity, 0)})`}
        </button>
      </header>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onAdd={handleAdd}
            onRemove={handleRemove}
            isHindi={isHindi}
          />
        ))}
      </div>
      {showBasket && (
        <div className="basket">
          <h2>{isHindi ? 'आपका बास्केट' : 'Your Basket'}</h2>
          {basket.length === 0 ? (
            <p>{isHindi ? 'बास्केट खाली है' : 'Basket is empty'}</p>
          ) : (
            <ul>
              {basket.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{isHindi ? item.nameHi : item.name}</h4>
                    <p>{isHindi ? item.descriptionHi : item.description}</p>
                    <p>{isHindi ? `₹${item.priceHi}` : `₹${item.price}`}</p>
                    <span>Quantity: {item.quantity}</span>
                    <button onClick={() => handleRemove(item)}><FaMinus /></button>
                    <button onClick={() => handleAdd(item)}><FaPlus /></button>
                  </div>
                </li>
              ))}
              <li className="total">
                <h3>{isHindi ? 'कुल मूल्य' : 'Total Price'}: ₹{calculateTotal()}</h3>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ item, onAdd, onRemove, isHindi }) => (
  <div className="menu-item">
    <img src={item.image} alt={item.name} />
    <div className="item-details">
      <h3>{isHindi ? item.nameHi : item.name}</h3>
      <p>{isHindi ? item.descriptionHi : item.description}</p>
      <p>{isHindi ? `₹${item.priceHi}` : `₹${item.price}`}</p>
      <button onClick={() => onAdd(item)}>Add</button>
      <button onClick={() => onRemove(item)}>Remove</button>
    </div>
  </div>
);

export default App;
