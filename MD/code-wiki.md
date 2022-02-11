# CODE Wiki

## HTML

1. Compress html [TidyHtml](https://www.html-tidy.org)

## CSS

1. How to make [shapes](https://www.youtube.com/watch?v=QY7Rj8aZcZk) with CSS (!yt tut)

1. Animating with [CSS Transitions](https://www.youtube.com/watch?v=Nloq6uzF8RQ) properties

1. Animated [Responsive Navbar](https://www.youtube.com/watch?v=biOMz4puGt8) with CSS

## Set width wisely

1. three lines in one: `width: clamp(200px, 50%, 600px); //min, preferred, max`

1. Set the main center paragraph: `grid-template-columns: 1fr minmax(100%, 60ch) 1fr;`

## Videos

1. Responsive
   `video{`
   `width:100%;`
   `aspect-ratio: 16/9;}`

### Flebox

1. Flexbox is more [complicated(YT)](https://www.youtube.com/watch?v=fm3dSg4cxRI) than you thought: [CSS trick](https://css-tricks.com/equal-columns-with-flexbox-its-more-complicated-than-you-might-think/)

1. the best way to watch how the flexbox is working in your page is in **Firefox**.

### Media query

1. the best breakpoints:

   In practice, many designers convert pixels to ems, largely because ems afford better zooming. At standard zoom 1em === 16px, multiply pixels by 1em/16px to get ems. For example, 320px === 20em.

   In response to the comment, min-width is standard in "mobile-first" design, wherein you start by designing for your smallest screens, and then add ever-increasing media queries, working your way onto larger and larger screens.

   Regardless of whether you prefer min-, max-, or combinations thereof, be cognizant of the order of your rules, keeping in mind that if multiple rules match the same element, the later rules will override the earlier rules.

   <!--  @media (min-width:320px)  { /*smartphones, iPhone, portrait 480x320 phones*/ }

   @media (min-width:481px)  { /*portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide.*/ }
   @media (min-width:641px)  { /*portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones*/ }
   @media (min-width:961px)  { /*tablet, landscape iPad, lo-res laptops ands desktops*/ }
   @media (min-width:1025px) { /*big landscape tablets, laptops, and desktops*/ }
   @media (min-width:1281px) { /*hi-res laptops and desktops*/ } -->

1. CSS tricks very [complete guide](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

   1. Dark Mode

   - As Adhuham explains in the [complete guide](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) to Dark Mode there is way more to it than just changing the color of the background. Before you jump into doing dark mode remember that if you don’t have a very smart implementation strategy you might end up with a code base that’s really hard to maintain. [CSS variables](https://css-tricks.com/theming-with-variables-globals-and-locals/) can do wonders for it but that’s a subject for another article.

   1. Apply a sticky header for large viewports

   1. Landcapde Mode
      `/* iPhone X Landscape */`
      `@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)`
      `{ /* Styles! */ }`

   1. A11y

      1. prefers-reduced-motion

      1. prefers-contrast

      1. inverted-colors

### ARE YOU USING THE RIGHRT CSS UNITS?

        1. FOR A BETTER USE OF rem

em is better beacause it no over write user browser preferences
html {
font-size: 62.5%; <!--Now 10px is equal 1rem-->
}
body {
font-size: 3.5rem; // if font-size is 62.5% then 3.5rem is exactly 35px
}

        2. ARE YOU SETTING THE WIDTH?

1em traditionally is the with of "M".
1ch is the width of "0".
Usually we use less than 75ch(45ch recommended) for a paragraph, so we use max-width with ch

        3. ARE YOU SETTING THE HEIGHT

viewport hight may have problems, especially with mobile devices, when the keyboard appears
Recommend using a min heigh instead of a height, cause if the content shrinks when the width in narrowing it wil need more room

        4. ARE YOU SETTING A PADDING OR MARGIN?

Better to use em or rem, it depends on wether you want the padding or margin to be consistent despite the element you're setting it on or if you want it to adjust based on the element's from size.
em for padding on buttons, then if your font-size gets bigger your bottom padding will be bigger in the same proportion

## JS

### Learn

1. Build 15 Vanilla Projects [YT freeCodeAca](https://www.youtube.com/watch?v=3PHXvlpOkf4)
   ⭐️ Course Contents ⭐️
   ⌨️ (00:00) Intro
   ⌨️ (07:01) Color Flipper
   ⌨️ (30:25) Counter
   ⌨️ (44:04) Reviews
   ⌨️ (1:11:29) Navbar
   ⌨️ (1:26:21) Sidebar
   ⌨️ (1:39:03) Modal
   ⌨️ (1:48:26) Questions
   ⌨️ (2:16:25) Menu
   ⌨️ (3:16:13) Video
   ⌨️ (3:32:45) Scroll
   ⌨️ (4:36:15) Tabs
   ⌨️ (4:58:53) Countdown
   ⌨️ (5:56:35) Lorem Ipsum
   ⌨️ (6:18:23) Grocery
   ⌨️ (8:01:14) Slider

1. JS 30 Days [challenge](https://javascript30.com)

### GATSBY

1. [Part 0](https://www.gatsbyjs.com/docs/tutorial/part-0/): Set Up Your Development Environment

### GSAP.js

1. GSAP [Docs](https://greensock.com/docs/)

1. [ScrollTrigger](https://www.youtube.com/watch?v=X7IBa7vZjmo)

1. When to use [GreenSock / CSS](https://www.youtube.com/watch?v=R7dme7BRGOM) Animations

1. [Magical](https://www.youtube.com/watch?v=a3-lwxTkUKI) behind Text Hover animation

1. A [stackoverflow](https://stackoverflow.com/questions/39862190/greensock-gsap-is-much-less-smooth-more-jerky-compared-to-css-animations-in-th) comparing GSAP vs CSS

### CURSOR-POINTER

1. Circle Cursor Animation, [Youtube](https://youtu.be/TpwpAYi-p2w)

## Good practices

1. MDN [Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)

1. C# corner [Best Practices](https://www.c-sharpcorner.com/article/best-practices-on-javascript-css-and-html/): JavaScript, CSS and HTML

1. [50 CSS](https://medium.com/before-semicolon/50-css-best-practices-guidelines-to-write-better-css-c60807e9eee2) Best Practices & Guidelines to Write Better CSS

## WEB technologies

### CMS

1. [What Is](https://kinsta.com/knowledgebase/content-management-system/) a Content Management System (CMS)?

### Learn

1. Git and Github in 1 hour [YT freeCodeAca](https://www.youtube.com/watch?v=RGOj5yH7evk)
