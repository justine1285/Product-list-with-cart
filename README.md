
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./product-list/src/assets/images/cartlist.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

### State Management
- Dynamic State Updates:
Managing cart items dynamically (cartItems state).
Updating state conditionally (e.g., adding, removing, and updating items in the cart).
- Resetting State:
Implementing logic to reset specific parts of the state (like individual items or the entire cart).
- Component Communication
- Prop Drilling:
Passing down functions like handleRemoveFromCart, resetCart, and registerResetFunction from the parent (App) to the child (CartInfo).
- Reusability:
Writing reusable logic in App and CartInfo components to handle cart functionality and reset logic.

- React Lifecycle
- Effect Hook (useEffect):
Using useEffect to register reset functions dynamically when cart items change.
- State Initialization:
Properly initializing state to ensure the app starts with an empty cart.


## Author

- Frontend Mentor - [@justine1285](https://www.frontendmentor.io/profile/justine1285)
- Twitter - [@justine_mamus](https://www.twitter.com/justine_mamus)

