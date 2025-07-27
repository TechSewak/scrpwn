# SLN Security - Professional Security Website

A modern, responsive security company website built with React, Firebase, and Tailwind CSS. Specialized for Delhi NCR region.

## Features

- 🛡️ **Professional Security Theme** - Dark, modern design perfect for security companies
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast & Modern** - Built with React 18 and modern web technologies
- 🔥 **Firebase Integration** - Ready for backend services
- 🎨 **Beautiful UI** - Custom animations and professional styling with trust-focused yellow accents
- 📝 **Contact Forms** - Functional contact forms with validation
- 🚀 **SEO Optimized** - Proper meta tags and structure
- 🇮🇳 **Delhi NCR Focused** - Localized content and contact information

## Pages

- **Home** - Hero section, features, statistics, and call-to-action
- **Services** - Comprehensive security services with pricing in INR
- **About** - Company story, team (led by Pawan Chaudhary), values, and achievements
- **Contact** - Contact form and company information

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS, Custom CSS
- **Icons**: Lucide React
- **Backend**: Firebase (configured and ready)
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sln-security
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your Firebase configuration:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key_here
   REACT_APP_FIREBASE_AUTH_DOMAIN=sln-security.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=sln-security
   REACT_APP_FIREBASE_STORAGE_BUCKET=sln-security.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=769578128111
   REACT_APP_FIREBASE_APP_ID=1:769578128111:web:334c6412958408d344011
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Firebase Setup

1. **Create a Firebase project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project named "sln-security"
   - Enable the services you need (Authentication, Firestore, etc.)

2. **Get your configuration**
   - Go to Project Settings > General
   - Scroll down to "Your apps"
   - Add a web app if you haven't already
   - Copy the configuration object

3. **Update your .env file**
   - Replace the placeholder values with your actual Firebase configuration

## Customization

### Colors
The website uses a custom color palette with yellow trust accents defined in `tailwind.config.js`:

```javascript
colors: {
  'sln-blue': {
    // Blue shades for security
  },
  'sln-yellow': {
    // Yellow shades for trust
  },
  'sln-gray': {
    // Gray shades
  }
}
```

### Content
- Update company information in the components
- Replace placeholder images with your own
- Modify contact information and addresses for Delhi NCR
- Update service offerings and pricing in INR

### Styling
- Custom CSS classes are defined in `src/App.css`
- Component-specific styles are in their respective files
- Tailwind utilities are used throughout for responsive design

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init`
4. Deploy: `firebase deploy`

### Deploy to Other Platforms
The build folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- etc.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   └── Footer.js       # Footer component
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── Services.js     # Services page
│   ├── About.js        # About page
│   └── Contact.js      # Contact page
├── App.js              # Main app component
├── App.css             # Custom styles
├── index.js            # App entry point
└── index.css           # Global styles
```

## Contact Information

**SLN Security**
- **Owner**: Pawan Chaudhary
- **Phone**: +91-98765-43210
- **Email**: info@slnsecurity.com
- **Location**: Delhi NCR, India

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: info@slnsecurity.com
- Phone: +91-98765-43210
- Owner: Pawan Chaudhary

## Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Built with [Create React App](https://create-react-app.dev/) 