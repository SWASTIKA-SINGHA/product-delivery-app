# 📧 Email Setup Guide - Send Order Confirmations to Gmail

## Overview
This guide will help you set up **EmailJS** to automatically send order confirmation emails to customers' Gmail accounts (or any email provider).

---

## 🚀 Step-by-Step Setup

### Step 1: Create Free EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up Free"**
3. Create account with your email
4. Verify your email address
5. Log in to EmailJS dashboard

---

### Step 2: Add Email Service (Gmail)

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with your Gmail account
6. Allow EmailJS to send emails on your behalf
7. Give service a name (e.g., "FastKart Orders")
8. Copy the **Service ID** (looks like: `service_abc123`)
9. Click **"Create Service"**

**Alternative: Use other email providers**
- Outlook
- Yahoo
- Custom SMTP
- SendGrid, etc.

---

### Step 3: Create Email Template

1. Click **"Email Templates"** in dashboard
2. Click **"Create New Template"**
3. Give it a name: **"Order Confirmation"**
4. Copy the **Template ID** (looks like: `template_xyz789`)

**Email Template Content:**

**Subject:**
```
Order Confirmation - {{order_id}} | FastKart
```

**Message Body:**
```html
Dear {{to_name}},

Thank you for your order at FastKart! 🎉

ORDER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Order ID: {{order_id}}
Order Date: {{order_date}}

CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}

DELIVERY ADDRESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{delivery_address}}

ITEMS ORDERED ({{items_count}} items)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{items_list}}

PAYMENT SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subtotal: ₹{{subtotal}}
Delivery Charge: ₹{{delivery_charge}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL: ₹{{total_amount}}

PAYMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Payment Method: {{payment_method}}
Payment Status: {{payment_status}}
Payment ID: {{payment_id}}

DELIVERY INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Delivery Type: {{delivery_type}}
Estimated Delivery: {{estimated_delivery}}

Thank you for shopping with FastKart!

For any queries, please contact us.

Best regards,
FastKart Team
```

5. **Important:** Set "To Email" field to: `{{to_email}}`
6. Click **"Save"**

---

### Step 4: Get Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. Copy your Public Key (looks like: `AbC123XyZ_-456`)

---

### Step 5: Update Your Website Code

1. Open `index.html`
2. Find this section (around line 640):

```javascript
// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```

3. Replace with your actual values:

```javascript
// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'AbC123XyZ_-456';  // Your Public Key
const EMAILJS_SERVICE_ID = 'service_abc123';   // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // Your Template ID
```

4. Save the file

---

## ✅ Testing Email Functionality

### Test 1: Place an Order

1. Open `index.html` in browser
2. Add products to cart
3. Fill the checkout form:
   - **Name:** Your Name
   - **Email:** your-email@gmail.com (use YOUR real email)
   - **Phone:** 9876543210
   - **Address:** Complete address
4. Select delivery option
5. Choose payment method (COD or Online)
6. Click "Place Order"
7. Check your email inbox

**Expected Result:**
- ✓ Order confirmation appears on screen
- ✓ Email arrives in your Gmail inbox within 1-2 minutes
- ✓ Email contains all order details

### Test 2: Check Console

1. Open browser console (F12)
2. Look for:
   - `✓ Email sent successfully!` (green)
   - Or `✗ Email sending failed:` (red with error)

---

## 🎯 What the Email Contains

The customer will receive an email with:
- ✅ Order ID and date
- ✅ Customer information
- ✅ Delivery address
- ✅ List of all items ordered
- ✅ Price breakdown (subtotal, delivery, total)
- ✅ Payment details and status
- ✅ Payment ID (for online payments)
- ✅ Delivery type and estimated date

---

## 🔍 Troubleshooting

### Problem: Email not arriving

**Solution 1: Check Spam/Junk folder**
- Emails might land in spam initially
- Mark as "Not Spam" to fix future emails

**Solution 2: Verify EmailJS credentials**
```javascript
// Check these are correct in index.html
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
const EMAILJS_SERVICE_ID = 'your_actual_service_id';
const EMAILJS_TEMPLATE_ID = 'your_actual_template_id';
```

**Solution 3: Check browser console**
- Press F12 → Console tab
- Look for error messages
- Common errors:
  - "Invalid public key" → Wrong public key
  - "Service not found" → Wrong service ID
  - "Template not found" → Wrong template ID

**Solution 4: EmailJS Dashboard**
- Go to EmailJS dashboard
- Click "History" to see email logs
- Check if email was sent successfully
- See delivery status

**Solution 5: Free Plan Limits**
- EmailJS free plan: **200 emails/month**
- If limit reached, upgrade plan or wait for next month

---

## 📊 Email Sending Flow

```
User Places Order
    ↓
Order Validated
    ↓
Payment Processed (if Online)
    ↓
Order Saved to localStorage
    ↓
sendOrderEmail() function called
    ↓
Email prepared with order details
    ↓
EmailJS sends email via Gmail
    ↓
Email arrives in customer's inbox
    ↓
Customer receives confirmation
```

---

## 🎨 Customize Email Template

Want to make email prettier? Go to EmailJS dashboard:

1. Click on your template
2. Switch to "HTML" mode
3. Add styling:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
  <div style="background-color: white; padding: 30px; border-radius: 10px;">
    <h1 style="color: #1a73e8; text-align: center;">🛒 FastKart</h1>
    <h2 style="color: #28a745;">Order Confirmed! ✓</h2>
    
    <p>Dear {{to_name}},</p>
    <p>Thank you for your order! 🎉</p>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <h3>Order Details</h3>
      <p><strong>Order ID:</strong> {{order_id}}</p>
      <p><strong>Date:</strong> {{order_date}}</p>
    </div>
    
    <!-- Add more sections -->
    
    <p style="margin-top: 30px; color: #666;">
      Best regards,<br>
      <strong>FastKart Team</strong>
    </p>
  </div>
</div>
```

---

## 💰 Pricing

### EmailJS Free Plan
- ✅ 200 emails per month
- ✅ All features included
- ✅ No credit card required

### Paid Plans (if needed)
- **Personal:** $7/month - 1,000 emails
- **Professional:** $15/month - 5,000 emails
- **Team:** $40/month - 20,000 emails

For testing and small businesses, **free plan is enough!**

---

## 🔒 Security Notes

### What's Safe:
- ✅ EmailJS Public Key can be in frontend code
- ✅ No password storage needed
- ✅ EmailJS handles authentication securely
- ✅ Gmail credentials never exposed

### What to Avoid:
- ❌ Don't share EmailJS account password
- ❌ Don't exceed free plan limits
- ❌ Don't send spam emails

---

## 📝 Email Validation in Form

Current validation ensures:
- ✅ Valid email format (example@domain.com)
- ✅ Only accepts proper email addresses
- ✅ Supports Gmail, Yahoo, Outlook, etc.
- ✅ Shows error if invalid format entered

**Validation Rules:**
```javascript
// Email must match: username@domain.extension
Pattern: [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

Valid Examples:
✓ john@gmail.com
✓ user.name@yahoo.co.in
✓ test123@outlook.com

Invalid Examples:
✗ invalid.email
✗ @gmail.com
✗ user@domain
```

---

## 🎯 Final Checklist

Before going live:
- [ ] Created EmailJS account
- [ ] Connected Gmail service
- [ ] Created email template
- [ ] Copied all 3 credentials (Public Key, Service ID, Template ID)
- [ ] Updated index.html with credentials
- [ ] Tested with your own email
- [ ] Received test email successfully
- [ ] Email looks good and readable
- [ ] All order details showing correctly

---

## 📞 Support

**EmailJS Help:**
- Documentation: https://www.emailjs.com/docs/
- Support: support@emailjs.com

**Common Issues:**
- Emails in spam: Mark as "Not Spam"
- Limit reached: Upgrade plan or wait
- Wrong credentials: Double-check all IDs

---

## ✨ Alternative: Using Gmail SMTP Directly

If you prefer not to use EmailJS, you can:
1. Create a backend server (Node.js/PHP)
2. Use Nodemailer (for Node.js)
3. Configure Gmail SMTP settings
4. Send emails from server

**Note:** This requires backend development and is more complex.

---

## 🎉 Success!

Once configured, every order will automatically send:
- ✅ Professional email to customer
- ✅ All order details included
- ✅ Payment confirmation
- ✅ Delivery information
- ✅ Order tracking details

**Your e-commerce website now has professional email notifications! 📧✨**
