# Importing Fonts

The following steps describe how to import a new font into the project. In this example, we're using Google Fonts and the variable font files.

1. Go to [Google Fonts](https://fonts.google.com/).
2. Select a font family that you want to include in your project.
3. Once you've made your selection, click on "View Selected families" in the top right corner of the page.
4. Click the "Download" button, which will download a zip file containing the selected font family.
5. Extract the zip file. It should contain a variety of font file formats including variable font files.
6. Copy the variable font files (ending in `.ttf`) into a new folder named after the font (e.g. `fonts/montserrat/`) in the project's `fonts` directory.
7. Import the font in your CSS or SCSS file using `@font-face`. Here's an example:

```scss
///////////////////////////////////////////////
// Montserrat
///////////////////////////////////////////////

// Normal
@font-face {
    font-family: 'Montserrat';
    src: url('../fonts/montserrat/Montserrat-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900; 
    font-style: normal;
}

// Italic
@font-face {
    font-family: 'Montserrat';
    src: url('../fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900;
    font-style: italic;
}
```


8. After adding the @font-face rule, you can now use your font throughout your stylesheets by referring to it by name, like so: font-family: 'Montserrat', sans-serif;.