# FastKart - Product Delivery App

A fully functional product delivery application with a complete backend system built using vanilla JavaScript and localStorage.

## Features

✅ **Product Catalog** - Browse 9 different products across multiple categories
✅ **Shopping Cart** - Add, remove, and update quantities
✅ **Order Placement** - Complete checkout with address and payment method
✅ **Order History** - View all past orders with details
✅ **Persistent Storage** - All data saved in browser localStorage
✅ **Real-time Updates** - Cart count and totals update instantly
✅ **Order Tracking** - Unique order IDs and estimated delivery dates

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Vanilla JavaScript (localStorage-based)
- **Storage**: Browser LocalStorage API
- **No dependencies required** - Works directly in any modern browser

## How to Use

1. **Open the app**: Simply open `index.html` in your web browser
2. **Browse products**: View all available products with prices
3. **Add to cart**: Click "Add to Cart" on any product
4. **View cart**: Click "View Cart" to see your items
5. **Manage cart**: Update quantities or remove items
6. **Place order**: 
   - Enter delivery address
   - Provide phone number
   - Select payment method
   - Click "Place Order"
7. **View orders**: Click "Order History" to see all past orders

## File Structure

```
product-delivery-app/
├── index.html          # Main frontend interface
├── backend.js          # Backend logic with localStorage
├── script.js           # Legacy script (not used)
├── style.css           # Legacy styles (not used)
├── README.md           # This file
└── *.jpg               # Product images
```

## Backend Features

The `backend.js` file provides a complete backend system with:

### Product Management
- Product database with 9 items
- Categories: Beauty, Food, Stationery, Clothing
- Price information for each product

### Cart Operations
- Add items to cart
- Remove items from cart
- Update item quantities
- Calculate cart totals
- Persistent cart storage

### Order Processing
- Generate unique order IDs
- Save order details
- Calculate delivery dates
- Store order history
- Support multiple payment methods

## Data Storage

All data is stored in browser localStorage:
- `fastkart_cart` - Current shopping cart
- `fastkart_orders` - Order history

## Browser Compatibility

Works on all modern browsers that support:
- HTML5
- CSS3
- ES6 JavaScript
- LocalStorage API

## Future Enhancements

- User authentication
- Product search and filters
- Order status tracking
- Email notifications
- Payment gateway integration
- Admin dashboard

## License

Free to use for educational purposes.

## Support

For issues or questions, please check that:
1. JavaScript is enabled in your browser
2. LocalStorage is not disabled
3. You're using a modern browser (Chrome, Firefox, Safari, Edge)
