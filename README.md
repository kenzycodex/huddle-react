## Huddle Landing Page with Alternating Feature Blocks

This project is a landing page for Huddle, designed to showcase the benefits of building and engaging with a community online. The design alternates feature blocks to create a visually appealing and user-friendly layout. This project allowed me to enhance my coding skills by building a realistic and interactive web page.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Huddle Landing Page Screenshot](public\screenshot.png)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/huddle-landing-page-with-alternating-feature-blocks-BQkTe_QzED)
- [Live Site URL](https://huddle-website-navy.vercel.app)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Font Awesome](https://fontawesome.com/) - Icon library

### What I Learned

Working on this project helped reinforce my understanding of responsive design principles and the importance of creating an optimal user experience across different devices. Here are a few code snippets that highlight what I learned:

**HTML Structure:**

```html
<header class="header">
    <div class="logo">
        <img src="images/logo.svg" alt="Huddle Logo">
    </div>
    <div class="cta">
        <button class="btn btn-primary"> <span>Try It Free</span> </button>
    </div>
</header>
```

**CSS Styling:**

```css
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.btn-primary {
    background-color: hsl(322, 100%, 66%);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: hsl(322, 100%, 50%);
}
```

**Responsive Design with Flexbox:**

```css
.features {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

@media (min-width: 768px) {
    .features {
        flex-direction: row;
        justify-content: space-between;
    }
}
```

### Continued Development

In future projects, I want to focus more on:

- Enhancing accessibility features for users with disabilities
- Implementing more advanced CSS animations to improve the user experience
- Exploring and implementing CSS and JS frameworks and libraries to expand my skill set

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - This is an invaluable resource for web developers, providing documentation and tutorials on HTML, CSS, and JavaScript.
- [CSS-Tricks](https://css-tricks.com/) - A great site for CSS tips and tricks, with many helpful articles and tutorials.
- [Bootstrap Documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/) - Comprehensive documentation for Bootstrap, which I used extensively in this project.

## Author

- Portfolio Website - [Kenzy Codex](https://kenzycodex.vercel.app)
- Frontend Mentor - [@kenzycodex](https://www.frontendmentor.io/profile/kenzycodex)


## Acknowledgments

I would like to thank the Frontend Mentor community for their continuous support. This project was a great learning experience, and I appreciate the challenge it provided.
