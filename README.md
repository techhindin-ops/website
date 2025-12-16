# techHind Website

A modern, professional website for techHind - India's most powerful CRM platform for Solar EPC companies.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
techHind/
├── app/
│   ├── components/      # React components
│   ├── data/
│   │   └── siteData.ts   # Central data file (UPDATE THIS!)
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── public/               # Static assets
└── package.json          # Dependencies
```

## Customization

### Update Website Content (IMPORTANT!)

**All dynamic content is centralized in one file for easy updates:**

📁 **File to Edit**: `app/data/siteData.ts`

This single file contains all the dynamic content:
- **Company Information**: Name, description, tagline
- **Contact Details**: Email, phone, address, social media links
- **SEO Metadata**: Page title and description
- **Hero Section**: Headlines, CTAs, feature highlights
- **Testimonials**: Client names, companies, testimonials
- **Navigation**: Menu items and button labels
- **Footer Links**: All footer navigation links

Simply open `app/data/siteData.ts` and update the values. Changes will automatically reflect across the entire website!

### Example Updates

```typescript
// In app/data/siteData.ts
contact: {
  email: "your-email@techhind.com",  // Update this
  phone: "+91-1234567890",            // Update this
  address: "Your actual address",     // Update this
  // ...
}
```

### Email Configuration

To enable contact form email sending:

1. Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

2. Update `.env.local` with your email service credentials:
```env
EMAIL_SERVICE=sendgrid
EMAIL_FROM=noreply@techhind.com
EMAIL_TO=contact@techhind.com
EMAIL_API_KEY=your_sendgrid_api_key_here
```

3. For SendGrid:
   - Sign up at https://sendgrid.com
   - Create an API key at https://app.sendgrid.com/settings/api_keys
   - Add the API key to `.env.local`

**Note**: The contact form will work even without email configuration - it will log submissions to the console for development purposes.

### Add Your Logo

1. Place your logo file in the `public/` directory
2. Update the Header component to use your logo image instead of the text-based logo

### Colors

The color scheme can be customized in `tailwind.config.ts`. Current primary colors:
- Blue: `#2563eb`
- Orange: `#f97316`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This Next.js application can be deployed to:
- **Vercel** (recommended): Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Use the Next.js build preset
- **Any Node.js hosting**: Build and deploy the production build

## Technologies Used

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (Icons)

## License

Copyright © 2024 techHind. All rights reserved.

