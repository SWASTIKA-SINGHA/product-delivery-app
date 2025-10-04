# 🚨 Important: How to Test Email Functionality

## ⚠️ Why Email Doesn't Work with Live Server

The error you're seeing (`405 Method Not Allowed`) happens because:
- **Live Server** only serves static files (HTML, CSS, JS, images)
- **PHP files** need a PHP server to execute
- `send-email.php` won't run on Live Server

## ✅ Solution: Use PHP Built-in Server

### Step 1: Stop Live Server
Click "Stop" in VS Code's status bar (or close the browser)

### Step 2: Start PHP Server
Open terminal in VS Code and run:
```powershell
php -S localhost:8000
```

### Step 3: Open in Browser
Go to: http://localhost:8000

Now emails will work! 📧

## 🎯 Current Behavior

### With Live Server (Port 5500):
- ❌ Emails don't send (PHP not available)
- ✅ Order still gets placed
- ⚠️ Console shows warning: "PHP backend not available"

### With PHP Server (Port 8000):
- ✅ Emails send successfully
- ✅ Order gets placed
- 🎉 Customer receives confirmation email

## 🌐 On Production (Real Hosting)

When you upload to a real web host like:
- Hostinger
- Bluehost
- SiteGround
- Any PHP-enabled hosting

**Emails will work automatically!** No special setup needed.

## 📋 Quick Reference

| Server Type | Port | Email Works? |
|------------|------|--------------|
| Live Server | 5500 | ❌ No (PHP unavailable) |
| PHP Server | 8000 | ✅ Yes |
| Web Hosting | 80/443 | ✅ Yes |

## 💡 Pro Tip

For development, always use:
```powershell
php -S localhost:8000
```

This way you can test the full functionality including emails!

---

**Everything else works perfectly - cart, checkout, payments, validation!** 🎉
The email will work once you use a PHP server or deploy to hosting.
