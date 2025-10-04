// FastKart Backend - Vanilla JavaScript with localStorage
// This handles all backend operations: products, cart, and orders

class FastKartBackend {
  constructor() {
    this.initializeProducts();
    this.loadCart();
  }

  // Initialize products database
  initializeProducts() {
    this.products = [
      { id: 1, name: 'Lipstick', price: 299, image: 'lipstick.jpg', category: 'Beauty' },
      { id: 2, name: 'Shampoo', price: 199, image: 'shampoo.jpg', category: 'Beauty' },
      { id: 3, name: 'Facial Kit', price: 499, image: 'facialkit.jpg', category: 'Beauty' },
      { id: 4, name: 'Maggi', price: 12, image: 'maggi.jpg', category: 'Food' },
      { id: 5, name: 'Toblerone', price: 150, image: 'toblerone.jpg', category: 'Food' },
      { id: 6, name: 'Books', price: 250, image: 'book.jpg', category: 'Stationery' },
      { id: 7, name: 'Pencils', price: 50, image: 'pencil.jpg', category: 'Stationery' },
      { id: 8, name: "Men's T-Shirt", price: 399, image: "Men's_tshirt.jpg", category: 'Clothing' },
      { id: 9, name: "Women's Dress", price: 799, image: "women's_dress.jpg", category: 'Clothing' }
    ];
  }

  // Get all products
  getAllProducts() {
    return this.products;
  }

  // Get product by ID
  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  // Load cart from localStorage
  loadCart() {
    const savedCart = localStorage.getItem('fastkart_cart');
    this.cart = savedCart ? JSON.parse(savedCart) : [];
  }

  // Save cart to localStorage
  saveCart() {
    localStorage.setItem('fastkart_cart', JSON.stringify(this.cart));
  }

  // Get current cart
  getCart() {
    return this.cart;
  }

  // Add item to cart
  addToCart(productId) {
    const product = this.getProductById(productId);
    if (!product) {
      return { success: false, message: 'Product not found' };
    }

    // Check if product already in cart
    const existingItem = this.cart.find(item => item.productId === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({
        productId: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }

    this.saveCart();
    return { 
      success: true, 
      message: `${product.name} added to cart`,
      cart: this.cart,
      cartCount: this.getCartCount()
    };
  }

  // Remove item from cart
  removeFromCart(productId) {
    const index = this.cart.findIndex(item => item.productId === productId);
    
    if (index === -1) {
      return { success: false, message: 'Item not in cart' };
    }

    const removedItem = this.cart[index];
    this.cart.splice(index, 1);
    this.saveCart();
    
    return { 
      success: true, 
      message: `${removedItem.name} removed from cart`,
      cart: this.cart,
      cartCount: this.getCartCount()
    };
  }

  // Update quantity
  updateQuantity(productId, quantity) {
    const item = this.cart.find(item => item.productId === productId);
    
    if (!item) {
      return { success: false, message: 'Item not in cart' };
    }

    if (quantity <= 0) {
      return this.removeFromCart(productId);
    }

    item.quantity = quantity;
    this.saveCart();
    
    return { 
      success: true, 
      message: 'Quantity updated',
      cart: this.cart,
      cartCount: this.getCartCount()
    };
  }

  // Get cart count
  getCartCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  // Get cart total
  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Clear cart
  clearCart() {
    this.cart = [];
    this.saveCart();
    return { success: true, message: 'Cart cleared', cart: [] };
  }

  // Place order
  placeOrder(orderData) {
    if (this.cart.length === 0) {
      return { success: false, message: 'Cart is empty' };
    }

    if (!orderData.address || orderData.address.trim() === '') {
      return { success: false, message: 'Please provide delivery address' };
    }

    const order = {
      orderId: this.generateOrderId(),
      items: [...this.cart],
      totalAmount: this.getCartTotal(),
      address: orderData.address,
      paymentMethod: orderData.paymentMethod || 'COD',
      status: 'Placed',
      orderDate: new Date().toISOString(),
      estimatedDelivery: this.calculateDeliveryDate()
    };

    // Save order to localStorage
    this.saveOrder(order);

    // Clear cart after successful order
    this.clearCart();

    return { 
      success: true, 
      message: 'Order placed successfully!',
      order: order
    };
  }

  // Generate unique order ID
  generateOrderId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `ORD${timestamp}${random}`;
  }

  // Calculate estimated delivery date (3-5 days from now)
  calculateDeliveryDate() {
    const days = Math.floor(Math.random() * 3) + 3; // 3-5 days
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + days);
    return deliveryDate.toISOString();
  }

  // Save order to localStorage
  saveOrder(order) {
    const orders = this.getAllOrders();
    orders.unshift(order); // Add new order at the beginning
    localStorage.setItem('fastkart_orders', JSON.stringify(orders));
  }

  // Get all orders
  getAllOrders() {
    const savedOrders = localStorage.getItem('fastkart_orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  }

  // Get order by ID
  getOrderById(orderId) {
    const orders = this.getAllOrders();
    return orders.find(order => order.orderId === orderId);
  }

  // Clear all orders (for testing)
  clearAllOrders() {
    localStorage.removeItem('fastkart_orders');
    return { success: true, message: 'All orders cleared' };
  }
}

// Initialize backend
const backend = new FastKartBackend();
