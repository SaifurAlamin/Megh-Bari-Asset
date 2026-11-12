
# 🏡 Megh Bari — Website Assets

A collection of website assets and media resources for [Megh Bari](https://megh-bari-asset.netlify.app/), a real estate development company in Bangladesh.

## 🌐 Live Website

[**Visit Megh Bari →**](https://megh-bari-asset.netlify.app/)

## About the Project

Megh Bari is a real estate website built to present the company's projects, facilities, gallery, management information and contact details through a clean and user-friendly interface.

The website supports both English and Bangla, with responsive layouts for desktop, tablet and mobile devices.

## Features

- Modern and responsive UI
- English and Bangla language support
- Animated hero and content sections
- Project listing and project details
- Project location and Google Maps integration
- Image and video gallery
- Image preview modal
- Management section
- Investment calculator
- Site visit scheduling interface
- Plot map and project document section
- Company brochure and contact information
- Mobile-friendly navigation

## Technology Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide React

### Deployment
- Netlify

## Installation

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd megh-bari-frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run at:

http://localhost:3002

Check the terminal output if Vite uses a different port.

## Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The production files will be generated inside the `dist` directory.

## Project Structure

```text
megh-bari-frontend/
│
├── public/
│   ├── images/
│   ├── videos/
│   ├── Brochure.pdf
│   ├── megh-bari-master-layout.pdf
│   ├── megh-bari-price-list-september-2026.pdf
│   └── megh-bari-booking-form.pdf
│
├── src/
│   ├── app/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── projects/
│   │   ├── calculator/
│   │   └── booking/
│   │
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Assets

Static images, videos and PDF documents are stored inside the `public` directory.

Use root-relative paths when referencing public assets.

Example:

```jsx
<img src="/images/projects/hero-cloud.jpg" alt="Megh Bari Project" />
```

Video example:

```jsx
<video controls>
  <source src="/videos/projects/mb-site-02.mp4" type="video/mp4" />
</video>
```

Do not include `/public` in asset URLs.

## Deployment

The website is deployed using Netlify.

For production deployment:

1. Push the latest changes to GitHub.
2. Connect the repository to Netlify.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.
5. Deploy the website.

## Important Notes

- The investment calculator uses illustrative figures and should not be treated as an official quotation.
- Site visit scheduling currently provides a frontend interface; actual booking confirmation requires backend integration.
- Upcoming project locations are indicative until official project details are published.
- Verify project information, pricing and documents with the company before publication.

## License

This project is developed for Megh Bari Asset Limited.

All company branding, logos, photographs, videos and official documents belong to their respective owners.
