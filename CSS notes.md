# CSS Notes

## ARE YOU USING THE RIGHRT CSS UNITS?

        1. FOR A BETTER USE OF rem

em is better beacause it no over write user browser preferences
html {
font-size: 62.5%; Now 10px is equal 1rem
}
body {
font-size: 3.5rem; because font-size is 62.5% then 3.5rem is 35px exactly
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
