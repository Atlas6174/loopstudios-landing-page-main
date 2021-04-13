# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop hero image](./screenshots/loopstudios.png)

### Links

- Solution URL: [My solution in github](https://github.com/Atlas6174/loopstudios-landing-page-main)
- Live Site URL: [Live site in githubpages](https://atlas6174.github.io/loopstudios-landing-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Sass
- JavaScript
- IntersectionObserver

### What I learned

This time, I wannted to test my css-grid skills in the second section,
I founded some usefull resources in [css-tricks](https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/) about responsive grids
without media queries, an interesting implementation.

This is the core of the implementation:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  grid-gap: 2rem;
```

A whole explatation can be founded in css-tricks.

By the way, I wanted to test the IntersectionObserver API. It allows me to make
some animations or changes in the code when the user observe the element. I've
used this tool to give it some movement to the grid items and the image and text
from the first-section.

Another thing I've learned, is how to iterate over an HTML collection. Use a simple
"for/in" loop doesn't work, cause it iterates over others elements besides the HTML
tags; due to this situation, I had to find out how to iterate correctly. The
solution was simple:

```js
for (let i = 0; i < frstSection.length; i++) {
  console.log(frstSection[i]);
  observer.observe(frstSection[i]);
}
```

Being "frstSection" the HTML collection. The ".length" method define the endpoint
for loop. That's all.

### Continued development

I would like to order the animations in "interObs".

### Useful resources

- [css-tricks](https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/) - Responsive css-grid without media-queries.
- [Kevin Powell](https://www.youtube.com/watch?v=T8EYosX4NOo) - Introduction to IntersectionObserver.
- [MDN](https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API) - IntersectionObserver. Developer Mozilla.

## Author

I don't have webpage yet, nor twitter or another social media. But here you can find my
github and frontendmentor profiles:

- Frontend Mentor - [@@Atlas6174](https://www.frontendmentor.io/profile/Atlas6174)
- Github - [@Atlas6174](https://github.com/Atlas6174)
