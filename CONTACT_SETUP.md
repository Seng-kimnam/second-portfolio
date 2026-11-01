# Contact Form Setup Guide

This guide will help you set up Firebase and email notifications for the contact form.

## Overview

The contact form now:
- Stores submissions in Firebase Firestore
- Sends email notifications to the admin
- Sends confirmation emails to users
- Shows loading states and error handling

## Prerequisites

You need:
1. A Firebase account (free tier available at https://firebase.google.com)
2. A Gmail account or SMTP email service
3. Node.js and npm/pnpm installed

---

## Step 1: Set Up Firebase

### 1.1 Create a Firebase Project
1. Go to https://console.firebase.google.com
2. Click "Add project" and follow the wizard
3. Choose a project name (e.g., "portfolio-contacts")
4. Enable Google Analytics (optional)
5. Click "Create project"

### 1.2 Create Firestore Database
1. In the Firebase Console, click "Firestore Database" in the left menu
2. Click "Create database"
3. Choose "Start in production mode"
4. Select a location closest to you
5. Click "Create"

### 1.3 Get Firebase Config
1. Click the gear icon ⚙️ → Project settings
2. Under "Your apps", click on the web app icon `</>`
3. Copy your Firebase config credentials
4. You'll see something like:
```javascript
{
  apiKey: "AIzaSy...",
  authDomain: "portfolio-...",
  projectId: "portfolio-...",
  storageBucket: "portfolio-...",
  messagingSenderId: "...",
  appId: "..."
}
```

### 1.4 Update Firestore Security Rules
1. Go to Firestore Database → Rules
2. Replace the rules with:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      allow create: if request.auth == null;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```
3. Click "Publish"

---

## Step 2: Set Up Email (Gmail)

### 2.1 Enable 2FA and Create App Password
1. Go to https://myaccount.google.com
2. Click "Security" in the left menu
3. Enable "2-Step Verification" if not already enabled
4. Scroll down and click "App passwords"
5. Select "Mail" and "Windows Computer"
6. Google will generate a 16-character password
7. Copy this password (you'll need it for EMAIL_PASSWORD)

### 2.2 Alternative: Use Another Email Service
You can also use:
- SendGrid (recommended for production)
- Mailgun
- AWS SES
- Resend

For SendGrid:
```javascript
// Update the transporter in app/api/contact/route.ts
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
})
```

---

## Step 3: Configure Environment Variables

### 3.1 Copy .env.example to .env.local
```bash
cp .env.example .env.local
```

### 3.2 Fill in the values
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=portfolio-abc123.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=portfolio-abc123
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=portfolio-abc123.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc...

EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx (the 16-char app password)

ADMIN_EMAIL=your-email@gmail.com (where notifications go)

ADMIN_KEY=your-secret-key-12345
```

---

## Step 4: Deploy to Vercel

### 4.1 Add Environment Variables to Vercel
1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add all the variables from .env.local
   - **Important**: All `NEXT_PUBLIC_*` variables are public and safe to expose
   - Keep `EMAIL_PASSWORD`, `ADMIN_EMAIL`, and `ADMIN_KEY` as secrets

### 4.2 Deploy
```bash
git add .
git commit -m "Add contact form with Firebase and email"
git push
```

---

## Step 5: Test the Contact Form

1. Visit your portfolio site
2. Go to the Contact page
3. Fill in the form and submit
4. Check:
   - Firebase Console → Firestore → "contacts" collection (should see the document)
   - Your email inbox (admin notification)
   - Sender's email inbox (confirmation email)

---

## Troubleshooting

### Email Not Sending
- Check EMAIL_USER and EMAIL_PASSWORD are correct
- Make sure 2FA is enabled on Gmail
- Check server logs: `vercel logs`
- Make sure email service is not rate-limited

### Firestore Not Storing Data
- Check FIREBASE_PROJECT_ID is correct
- Verify Firestore Database exists and is in production mode
- Check browser console for errors
- Make sure Firestore rules are set correctly

### "Unauthorized" Error
- Verify all Firebase config values are correct
- Check that NEXT_PUBLIC_* variables are set
- Restart dev server: `pnpm dev`

### "Failed to send message" Error
- Check EMAIL_USER, EMAIL_PASSWORD, ADMIN_EMAIL
- Look at server logs for detailed error
- Make sure you're using app password, not regular Gmail password

---

## Advanced: Viewing Contacts

To view all contacts stored in Firestore:
1. Go to https://console.firebase.google.com
2. Click "Firestore Database"
3. Click the "contacts" collection
4. You'll see all form submissions with timestamps

To delete or mark contacts as read:
- Click a contact document
- Click the delete or edit icon

---

## Security Notes

- Never commit `.env.local` to Git (it's in .gitignore)
- `NEXT_PUBLIC_*` variables are visible in browser - that's intentional for Firebase public keys
- `EMAIL_PASSWORD` and `ADMIN_KEY` are kept secret
- In production, use strong ADMIN_KEY values
- Consider using Firebase Authentication for admin access

---

## Next Steps

1. Test the form thoroughly
2. Add admin dashboard to view/manage contacts
3. Set up email notifications for multiple admins
4. Add rate limiting to prevent spam
5. Set up automated email replies

For support: https://firebase.google.com/docs/firestore/start
