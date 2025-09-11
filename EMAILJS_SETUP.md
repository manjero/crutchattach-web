# EmailJS Setup Instructions

This project uses EmailJS to send emails directly from the client-side without requiring a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_xyz123`)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new message through the CrutchAttach contact form:

Name: {{from_name}}
Email: {{from_email}}
Country: {{from_country}}

Message:
{{message}}

---
This message was sent from the CrutchAttach website contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_abc456`)

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (User ID)
3. Copy this key (e.g., `user_xyz123`)

### 5. Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  USER_ID: 'your_actual_user_id',        // Your Public Key
  SERVICE_ID: 'your_actual_service_id',  // Your Service ID
  TEMPLATE_ID: 'your_actual_template_id' // Your Template ID
};
```

### 6. Test the Setup
1. Build and run your project
2. Open the contact modal
3. Fill out the form and submit
4. Check your email to confirm the message was received

## Template Variables

The following variables are automatically sent to your EmailJS template:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email address
- `{{from_country}}` - User's country
- `{{message}}` - User's message
- `{{to_name}}` - Recipient name (set to "CrutchAttach Team")

## Troubleshooting

### Common Issues:

1. **"EmailJS not configured" error**
   - Make sure you've updated all three values in `emailjs.ts`
   - Ensure there are no extra spaces or quotes

2. **Email not sending**
   - Check browser console for error messages
   - Verify your EmailJS service is active
   - Ensure your email template is published

3. **Rate limiting**
   - EmailJS free plan has limits (200 emails/month)
   - Consider upgrading for higher limits

### Testing in Development:
- The form will show an error if EmailJS isn't configured
- Check the browser console for detailed error messages
- Use the EmailJS dashboard to monitor email delivery

## Security Notes

- Your EmailJS Public Key is safe to include in client-side code
- EmailJS automatically prevents spam and abuse
- Consider adding reCAPTCHA for additional protection in production
