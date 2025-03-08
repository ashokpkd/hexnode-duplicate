React + Vite + Tailwind CSS Project

Project Overview

This is a React.js application built using Vite for fast development and Tailwind CSS for styling.

Features

Fast development with Vite

Utility-first styling with Tailwind CSS

Modular React components

Hot module replacement (HMR)

Installation & Setup

Clone the Repository

git clone https://github.com/ashokpkd/hexnode-duplicate.git ,
cd hexnode-duplicate

Install Dependencies

npm install

Start Development Server

npm run dev

Access the application at http://localhost:5173/.

Styling with Tailwind CSS

Tailwind CSS is configured in tailwind.config.js.

Example configuration:

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

Challenges Faced

Extracting assets and content without a predefined UI


Build for Production

To create an optimized build:

npm run build

Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.


Author

GitHub: ashokpkd
