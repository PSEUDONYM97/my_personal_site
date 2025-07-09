# Jared Williams' Personal Website

This repository contains the source code for my personal website, [jaredwilliams.dev](https://jaredwilliams.dev). It is built with Next.js and Tailwind CSS, and designed to be a clean, fast, and professional representation of my work and skills.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (using App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: Statically exported and hosted on [Hostinger](https://www.hostinger.com/).

## Project Structure

The project follows a standard Next.js `src` directory structure:

```
/
├── public/              # Static assets (images, fonts, .htaccess)
├── src/
│   ├── app/             # Application routes (pages)
│   ├── components/      # Reusable React components
│   └── ...
├── package.json         # Project dependencies
└── next.config.ts       # Next.js configuration
```

## Running the Project Locally

To run the development server on your local machine, follow these steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/PSEUDONYM97/my_personal_site.git
    cd my_personal_site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

The site will now be running at `http://localhost:3000`.

## Building for Production

This site is configured for a static export, which is ideal for hosting providers like Hostinger, Netlify, or Vercel.

To create a production-ready build, run the following command:

```bash
npm run build
```

This will generate a static version of your site in the `/out` directory. The contents of this directory can be uploaded to any static web host. The `.htaccess` file in `/public` is automatically included to handle server-side routing for clean URLs.
