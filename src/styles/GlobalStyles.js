import { createGlobalStyle } from "styled-components";
import RighteousWoff2 from "../assets/fonts/righteous-v9-latin-regular.woff2"
import RighteousWoff from "../assets/fonts/righteous-v9-latin-regular.woff"
import Nunito900Woff2 from "../assets/fonts/nunito-v22-latin-900.woff2"
import Nunito900Woff from "../assets/fonts/nunito-v22-latin-900.woff"
import NunitoItalicWoff2 from "../assets/fonts/nunito-v22-latin-italic.woff2"
import NunitoItalicWoff from "../assets/fonts/nunito-v22-latin-italic.woff2"
import NunitoWoff2 from "../assets/fonts/nunito-v22-latin-regular.woff2"
import NunitoWoff from "../assets/fonts/nunito-v22-latin-regular.woff2"
import Roboto900Woff2 from "../assets/fonts/roboto-v29-latin-900.woff2"
import Roboto900Woff from "../assets/fonts/roboto-v29-latin-900.woff"
import RobotoWoff2 from "../assets/fonts/roboto-v29-latin-regular.woff2"
import RobotoWoff from "../assets/fonts/roboto-v29-latin-regular.woff"

const GlobalStyles = createGlobalStyle`
/* Reboot */
/*!
 * Bootstrap Reboot v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
 *** MODIFIED BY CHRIS
 */

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.15;
  color: rgb(33, 37, 41);
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  border: 0;
  opacity: 0.25;
}

hr:not([size]) {
  height: 1px;
}

h6, h5, h4, h3, h2, h1 {
  margin: 0;
  font-weight: 500;
  line-height: 1.2;
}

h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1 {
    font-size: 2.5rem;
  }
}

h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2 {
    font-size: 2rem;
  }
}

h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3 {
    font-size: 1.75rem;
  }
}

h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4 {
    font-size: 1.5rem;
  }
}

h5 {
  font-size: 1.25rem;
}

h6 {
  font-size: 1rem;
}

p {
  margin: 0;
}


address {
  margin: 0;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 0;
}

ol,
ul,
dl {
  margin: 0;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin: 0;

}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 0.875em;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}


figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::-webkit-file-upload-button {
  font: inherit;
}

::file-selector-button {
  font: inherit;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}



/*Typography*/
/* righteous-regular */
@font-face {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  //src: local('Righteous'),
  src: url(${RighteousWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${RighteousWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* nunito-regular - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local(''),
  url(${NunitoWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
  url(${NunitoWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* nunito-900 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 900;
  //src: local('');
  src: url(${Nunito900Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${Nunito900Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* nunito-italic - latin */
@font-face {
  font-family: 'Nunito';
  font-style: italic;
  font-weight: 400;
  //src: local('');
  src: url(${NunitoItalicWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${NunitoItalicWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */

}
/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  //src: local('');
  src: url(${RobotoWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${RobotoWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* roboto-900 - latin */
@font-face {
  font-family: 'Roboto-900';
  font-style: normal;
  font-weight: 900;
  //src: local('');
  src: url(${Roboto900Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${Roboto900Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
body{
  font-family: Nunito, Roboto, sans-serif;
} 
h1{
  font-family: Righteous, Roboto-900, Nunito-900, sans-serif;
} 
h2,h3,h4,h5{
  font-family: Roboto-900, Nunito-900, sans-serif;
}
`
export default GlobalStyles;