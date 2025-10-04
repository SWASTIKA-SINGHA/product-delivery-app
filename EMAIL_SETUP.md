# 📧 Email Setup Guide - Send from swastikas857@gmail.com

## ✅ What's Configured

Your FastKart app is now set up to send order confirmation emails:
- **FROM**: swastikas857@gmail.com
- **TO**: Whatever email the customer enters in the checkout form
- **METHOD**: PHP backend (send-email.php)

## 🚀 How to Use

### Option 1: Local Testing with PHP

1. **Install PHP** (if not already installed):
   - Download from: https://www.php.net/downloads
   - Or use XAMPP: https://www.apachefriends.org/

2. **Start PHP Server** in your project folder:
   ```powershell
   cd D:\product-delivery-app-main\product-delivery-app-main
   php -S localhost:8000
   ```

3. **Open your app**:
   - Go to: http://localhost:8000
   - Place a test order with any email address
   - Check if email is received

### Option 2: Deploy to Web Hosting

1. **Upload these files** to your web hosting:
   - `index.html`
   - `backend.js`
   - `style.css`
   - `send-email.php` ← This handles emails
   - All product images

2. **Configure PHP Mail** on your server:
   - Most hosting providers (like Hostinger, Bluehost, SiteGround) have PHP mail pre-configured
   - Emails will be sent from swastikas857@gmail.com (as configured in send-email.php)

3. **Test the email functionality**:
   - Place a test order
   - Check the customer's email inbox (and spam folder)

## 📝 Important Notes

### Gmail Limitations
- Gmail's SMTP from shared hosting might go to spam
- For better delivery, consider these options:
  1. **Use your hosting's email** (e.g., orders@yourdomain.com)
  2. **Use SendGrid/Mailgun** (free tier available)
  3. **Configure SMTP properly** with authentication

### Current Setup
The current `send-email.php` uses PHP's `mail()` function which:
- ✅ Works on most web hosting
- ✅ No external service needed
- ✅ Simple and direct
- ⚠️ Might go to spam if not properly configured
- ⚠️ Requires PHP on server

## 🔧 Troubleshooting

### Emails not sending?

1. **Check PHP is working**:
   ```powershell
   php -v
   ```
   Should show PHP version

2. **Check for errors**:
   - Open browser console (F12)
   - Look for error messages when placing order

3. **Check spam folder**:
   - Emails might be marked as spam initially

### Want to use a different email?

Edit `send-email.php`, line 29:
```php
$headers .= "From: FastKart Store <YOUR_EMAIL@gmail.com>" . "\r\n";
$headers .= "Reply-To: YOUR_EMAIL@gmail.com" . "\r\n";
```

## 🎯 What Happens When Order is Placed

1. Customer fills checkout form with their email
2. Clicks "Place Order" or "Pay with Razorpay"
3. JavaScript sends order data to `send-email.php`
4. PHP sends beautiful HTML email to customer's email
5. Email contains:
   - ✅ Order ID and date
   - ✅ Customer information
   - ✅ All ordered items
   - ✅ Payment summary
   - ✅ Delivery information
   - ✅ Estimated delivery date

## 📧 Email Features

Your email template includes:
- 🎨 Beautiful HTML design
- 📱 Mobile responsive
- 🛍️ Complete order details
- 💰 Payment breakdown
- 🚚 Delivery information
- ✅ Professional branding

## 🌐 For Production (Real Website)

### Recommended: Use SendGrid (Free 100 emails/day)

1. Sign up at: https://sendgrid.com/
2. Get API key
3. Update `send-email.php` to use SendGrid API

I can help you set this up if needed!

---

**Your emails will now be sent from swastikas857@gmail.com to any customer email address! 🚀**
