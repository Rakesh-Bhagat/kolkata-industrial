# Kolkata Industrial Company - Professional B2B Website

A modern, responsive business website for Kolkata Industrial Company specializing in industrial lifting and material handling equipment.

## Features

- **Professional Design**: Clean, minimal aesthetic with a cream/beige background and burgundy accents
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices
- **Product Catalog**: Browse 50+ industrial lifting and material handling products
- **Advanced Filtering**: Search and filter products by category and name
- **Contact Management**: Integrated contact form with email notifications
- **SEO Optimized**: Automatic sitemap generation and meta tags for search engines
- **Fast Performance**: Built with Next.js 16 and optimized for speed

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui with Radix UI
- **Icons**: Lucide React
- **Email**: Ready for integration with Resend, SendGrid, Nodemailer, or Mailgun
- **Analytics**: Vercel Analytics included

## Getting Started

### Installation

1. Clone the repository or download the project files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles & design tokens
│   ├── not-found.tsx         # 404 error page
│   ├── sitemap.ts            # SEO sitemap generator
│   ├── products/
│   │   ├── page.tsx          # Products listing page
│   │   └── [id]/
│   │       └── page.tsx      # Individual product detail page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   └── api/
│       └── contact/
│           └── route.ts      # Contact form API endpoint
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── footer.tsx            # Footer
│   └── contact-form.tsx      # Reusable contact form
├── lib/
│   └── products.ts           # Product data and types
└── public/
    ├── products/             # Product images
    └── robots.txt            # Search engine crawl rules
```

## Product Management

Products are stored in `/lib/products.ts` and include:
- Product name and category
- Description and key features
- Product images
- Metadata for SEO

To add new products, edit the `products` array in `/lib/products.ts`.

## Email Integration Setup

The contact form is ready for email integration. Choose one of these options:

### Option 1: Resend (Recommended)
1. Create account at [resend.com](https://resend.com)
2. Get API key from dashboard
3. Add to environment variables:
   ```
   RESEND_API_KEY=your_key_here
   ```
4. Install: `npm install resend`
5. Uncomment Resend code in `/app/api/contact/route.ts`

### Option 2: SendGrid
1. Create account at [sendgrid.com](https://sendgrid.com)
2. Install: `npm install @sendgrid/mail`
3. Add environment variables:
   ```
   SENDGRID_API_KEY=your_key_here
   ```
4. Update API route with SendGrid integration

### Option 3: Nodemailer (Self-hosted SMTP)
1. Install: `npm install nodemailer`
2. Add environment variables:
   ```
   SMTP_HOST=your_smtp_host
   SMTP_PORT=587
   SMTP_USER=your_email@example.com
   SMTP_PASS=your_password
   ```
3. Update API route with Nodemailer integration

### Option 4: Mailgun
1. Create account at [mailgun.com](https://mailgun.com)
2. Install: `npm install mailgun.js`
3. Add environment variables with API credentials
4. Update API route accordingly

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and configure build settings
5. Add any environment variables in Project Settings
6. Deploy!

```bash
# Or deploy via CLI
npm i -g vercel
vercel
```

### Other Hosting Options

- **Netlify**: Supports Next.js with static export
- **AWS Amplify**: Full Next.js support
- **DigitalOcean**: Via App Platform
- **Self-hosted**: Node.js server with PM2

## Customization

### Colors & Design Tokens

Edit `/app/globals.css` to change the color scheme:
- Primary color: `--primary` (currently burgundy)
- Background: `--background` (cream/beige)
- Accents and secondary colors

### Brand Information

Update company details in:
- `/components/footer.tsx` - Contact information
- `/app/page.tsx` - About section
- `/app/contact/page.tsx` - Business hours and contact details

### Product Images

Replace images in `/public/products/` or update paths in `/lib/products.ts`

## SEO Configuration

The site includes:
- Automatic sitemap generation
- Meta tags and Open Graph data
- robots.txt for search engines
- Image alt text
- Semantic HTML structure

Update the domain in `/app/sitemap.ts` and `/public/robots.txt` before deployment.

## Performance Optimization

- Next.js 16 with Turbopack (default bundler)
- Image optimization with Next.js Image component
- CSS minification with Tailwind v4
- Static generation for product pages
- Incremental Static Regeneration ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Environment Variables

Create a `.env.local` file for development:

```
# Email Service (choose one)
RESEND_API_KEY=your_key
# OR
SENDGRID_API_KEY=your_key
# OR
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# Contact Email
CONTACT_EMAIL=kolindustrial8@gmail.com
```

## Maintenance

- Update product catalog in `/lib/products.ts`
- Monitor contact form submissions via email
- Update company information as needed
- Review analytics on Vercel dashboard
- Keep dependencies updated: `npm update`

## Support & Customization

For advanced customizations:
- Add authentication system
- Implement shopping cart and payments
- Add blog or resource center
- Integrate CRM system
- Add live chat support
- Implement multi-language support

## License

This project is proprietary to Kolkata Industrial Company.

## Contact

For website support:
- Phone: 8777619134, 8274057437
- Email: kolindustrial8@gmail.com
- Address: Santoshpur Station Road, Kolkata – 700141, India

---

**Last Updated**: January 2026
**Built with**: Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui
