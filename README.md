## Overview
### Screenshot

![Card NFT](./images/screenshot.jpg)
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
- Gsap lib to the window on load animation

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.buy-post .buy img{ /*Animation for the Ethereum icon*/

  animation: bownce 1s infinite alternate ease-in-out ;

}

  @keyframes bownce{
    
    from{
    transform: translateY(-2px);
  }
  to{
    transform: translateY(2px);
  }
}

```
```js
//LIB Gspa
    TweenMax.staggerFrom('.card', 2,{ //animation of the card
      delay: 0.2, 
      opacity: 0,
      y: 50,
      ease: Expo.easeInOut

    });
    TweenMax.staggerFrom('.attribution', 1.6,{ //animation of the footer
      delay: 1,
      opacity: 0,
      x: 50,
      ease: Expo.easeInOut

    });
```
## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Maxwell-Santos)
