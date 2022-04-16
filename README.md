## Overview
### Screenshot

![Card NFT](./images/screenshot.jpg)
### Links

- Solution URL: [solution](https://www.frontendmentor.io/solutions/responsive-card-nft-S1Cs_UOE5)
- Live Site URL: [Card NFT](https://nft-seven-nu.vercel.app/)

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
    TweenMax.staggerFrom('.card', 2,{ //animation to the card
      delay: 0.2, 
      opacity: 0,
      y: 50,
      ease: Expo.easeInOut

    });
    TweenMax.staggerFrom('.attribution', 1.6,{ //animation to the footer
      delay: 1,
      opacity: 0,
      x: 50,
      ease: Expo.easeInOut

    });
```
## Author

- Frontend Mentor - [@Maxwell-Santos](https://www.frontendmentor.io/profile/Maxwell-Santos)
