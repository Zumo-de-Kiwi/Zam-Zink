# UI/UX Wiki

1. A super amount [collection](https://www.uigoodies.com/) of UI, typo, icon, phot, illus....of webpages for UI/UX designers

## TYPOGRAPHY

### 1. TRICKS

1. System Font Stack [(CSS TRICKS)](https://css-tricks.com/snippets/css/system-font-stack/)

   **Method 1**
   a. GitHub uses this method on their site, applying **system fonts** on the body element:
   `body {font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";}` //{El capitan & later: San FRancisco, Yosemite: Helvetica, Vista: Segui UI, Android 4.0+: Roboto, }

   b. Both Medium and the WordPress admin use a similar approach, with a slight variation, most notably support for Oxygen Sans (created for the GNU+Linux operating system) and Cantarell (created for the GNOME operating system). This snippet also drops support for certain types of emoji and symbols:
   `body {font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;}`

   **Method 2**

1. [font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) in CSS

### 1. System Fonts

1. [Apple](https://developer.apple.com/fonts/system-fonts/)

1. [Windows](https://en.wikipedia.org/wiki/List_of_typefaces_included_with_Microsoft_Windows)

### 1. FONTS I would use

1. **Bungee** The hair-outline-heavyfill game

   - You can use the type for the web, using his different family members, but his downside is it hasn't a lower case

   - [Google Fonts](https://fonts.google.com/specimen/Bungee)

   - <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Hairline&family=Bungee+Inline&family=Bungee+Outline&family=Bungee+Shade&display=swap" rel="stylesheet"> -->

   - font-family: 'Bungee', cursive; font-family: 'Bungee Hairline', cursive;font-family: 'Bungee Inline', cursive;font-family: 'Bungee Outline', cursive;font-family: 'Bungee Shade', cursive;

   1. Bungee outline: normal mode.

   1. Bungee shade: when hover(it appears a shade in his left-downer side)

   1. Bungee (asecas): Title(is the fill version)

   1. Bungee inline: Like Bungee but without the hair inside(so weird)

   1. Bungee hairline: for complementary, ui or secondary stuff.

1. **BioRhyme** the seif cute normal-megastretched

   - [Google Fonts](https://fonts.google.com/specimen/BioRhyme)

   - <!-- <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <link href="https://fonts.googleapis.com/css2?family=BioRhyme+Expanded:wght@300;400;800&family=BioRhyme:wght@300;400;800&display=swap" rel="stylesheet"> -->

   - <!--font-family: 'BioRhyme', serif; font-family: 'BioRhyme Expanded', serif;-->

### 1. Space between lines, words, characters

1. Space between letters: `letter-spacing: 5px;` (can be minus too)

1. Height between lines: `line-height: 0.7;`

1. Word spacing: `word-spacing: -2px;`

1. for the left margin of the first line of the first parapgraph`text-indent: 40px;`

## LAYOUT

### Phrases

1. No many people reads before the first paragraph
   - So I made only one paragraph in the main page.

## COLOR

1. [Open color](https://yeun.github.io/open-color/) is an
   open-source color scheme

## PICS

1. CSS [image-rendering] is a filter that have: auto(bi/tri/linear), pixelated, crisp-edges(nearest-neighbor)(-webkit-optimize-contrast)

2. If you use background images a lot in your CSS, you can reduce the number of HTTP lookups needed by combining the images into one, known as an image sprite. Then you just apply the same image each time you need it for a background and adjust the x/y coordinates appropriately. This technique works best with elements that will have limited dimensions, and will not work for every use of a background image. However, the fewer HTTP requests and single image caching can help reduce page-load time.

## SVG

1. [Adding Shadows](https://css-tricks.com/adding-shadows-to-svg-icons-with-css-and-svg-filters/) to SVG Icons With CSS and SVG Filters, [Drop-Shadow](https://css-irl.info/drop-shadow-the-underrated-css-filter/): The Underrated CSS Filter

1. SASS [mixin](https://mimoymima.com/sass-mixin-responsive-svgs/) for responsive SVGs

1. Changing the complexity of the same logo/icon depending on the screen size, [Making SVGs Responsive with CSS](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/comment-page-2/#comments)

1. [Using SVG](https://css-tricks.com/lodge/svg/06-using-svg-svg-background-image/) as background-image

1. A more deep and complete w3 [page](https://www.w3.org/TR/SVG/styling.html#StylingUsingCSS)
   1. Styling SVG content using CSS
   2. Inline style sheets: the ‘style’ element
   3. External style sheets: the effect of the HTML ‘link’ element
   4. Style sheets in HTML documents
   5. Element-specific styling: the ‘class’ and ‘style’ attributes
   6. Presentation attributes
   7. Required properties
   8. User agent style sheet
   9. Required CSS features
   10. DOM interfaces
   - Interface SVGStyleElement

### OPTIMAZATION

1. [using](https://www.youtube.com/watch?v=a3-lwxTkUKI) SVGOMG and FontForge

1. Tools for [optimize](https://css-tricks.com/tools-for-optimizing-svg/) SVG

1. Optimizing for [WEB use](https://medium.com/larsenwork-andreas-larsen/optimising-svgs-for-web-use-part-1-67e8f2d4035#.2bnvih6cw)

## UNICODE

### Emoji

1. Emoji Cursor - CSS Generator [Tool](https://www.emojicursor.app/)

   - simplyfied version of the code?: `cursor: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🦄</text></svg>"), auto`

1. Mattherayfield [Animating](https://www.matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/) urls with js & emojis

1. Some emojis not displaying correctly in [VSCode macOS](https://github.com/microsoft/vscode/issues/118905)

   - This appears to be something specific to Menlo, which happens to be the default editor font on macOS.

   - I updated this line in my settings.json so that I no longer include Menlo and instead I have Monaco as the first font listed: `"editor.fontFamily": "Monaco, 'Courier New', monospace, 'Apple Color Emoji'"`
