# TSX-Unstop-Web-Development

An advanced personal portfolio website made using:
- HTML
- CSS
- JavaScript
- Bootstrap 5

## 🚀 Features
- Responsive navigation and layout
- Hero banner
- Skills section with progress bars
- Project showcase
- Contact form
- Smooth scrolling

## 📁 How to Use
1. Clone the repo or download the ZIP.
2. Open `index.html` in your browser.

## 📬 Contact
Email: kamaleshbhanudk2006@gmail.com  
GitHub: [github.com/KAMALESH-BHANU](https://github.com/KAMALESH-BHANU)

🧾 Code Explanation
This portfolio website is built using HTML, CSS, JavaScript, and Bootstrap 5. Here's a breakdown of how each part of the code works:

🧱 1. HTML Structure (index.html)
📌 Head Section
Includes the HTML document declaration and meta tags for character encoding and mobile responsiveness.

Loads Bootstrap CSS via CDN.

Links to a custom styles.css file for additional styles.

📌 Navbar
A responsive fixed-top navigation bar using Bootstrap's navbar classes.

Contains links to different sections: Home, About, Skills, Projects, Contact.

Uses scroll spy (data-bs-spy) so the active link highlights as the user scrolls.

📌 Hero Section
A full-screen (vh-100) header that introduces the user with a title and a call-to-action button.

Uses Bootstrap’s utility classes like d-flex, align-items-center, text-center.

📌 About Section
Contains a two-column layout with an image on one side and a short bio on the other.

Responsive thanks to Bootstrap’s grid system (row, col-md-6).

📌 Skills Section
Displays skill levels using Bootstrap’s progress bars.

Each progress bar shows a percentage with different colors to represent proficiency.

📌 Projects Section
Uses Bootstrap card components to showcase projects.

Includes image placeholders, titles, and short descriptions.

Adds a hover effect using custom CSS for interactivity.

📌 Contact Section
A simple contact form with name, email, and message inputs.

Uses Bootstrap’s form layout to make it responsive and neat.

📌 Footer
A dark footer with centered text and copyright.

🎨 2. Custom CSS (styles.css)
Adds smooth scrolling across sections with scroll-behavior: smooth.

Highlights the active navigation link using Bootstrap override styles.

Adds animation to the skill progress bars on page load.

Adds a hover zoom effect to project cards with transform: scale(1.05).

⚙️ 3. JavaScript (script.js)
Logs a welcome message in the browser console.

Contains logic to auto-collapse the navbar when a link is clicked on mobile devices.

This improves mobile UX using vanilla JavaScript.

📁 4. File Structure

portfolio/
│
├── index.html       # Main webpage structure
├── styles.css       # Custom styles and effects
├── script.js        # JavaScript for interaction
└── README.md        # Project description and code explanation

🌐 Live Demo & Hosting (Optional)
You can deploy this site using:

GitHub Pages
Netlify
Vercel
