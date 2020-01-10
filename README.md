
<h1 align="center">Pro Flutter</h1>
<div align="center"><a target="_blank" href="https://proflutter.io/"><img height="64px" style="max-width: 100%" src="https://github.com/btkFishu/Pro-Flutter/blob/master/src/images/favicon/favicon-96x96.png"></a></div>
<h4 align="center">Website for signing up to newsletter and sharing news about latest tutorials. Can be found at https://proflutter.io/</h4>

[![Build Status](https://travis-ci.com/pawelkaczoruk/Pro-Flutter.svg?branch=master)](https://travis-ci.com/pawelkaczoruk/Pro-Flutter)

## How to run:
    git clone https://github.com/pawelkaczoruk/Pro-Flutter.git && cd Pro-Flutter
    npm install
#####  Development build
    npm run dev
##### Production build
    npm run prod

## Tech stack:
* Travis CI
* Firebase hosting, analytics, firestore and storage
* npm
  * parcel bundler
  * babel polyfill
  * glidejs
  * firebase
  * sass
  * postcss-custom-properties
  * autoprefixer
  * parcel-plugin-static-files-copy
* SCSS, HTML, JS

## Update page:
To update page content modify **data.json** file:

* Visibility of section or other element can be changed by modifying ***visible*** property value (true/false)
* Text and title of each section can be modified by changing corresponding ***text*** and ***title*** property values
* Youtube course video can be changed by modifying youtube video ID inside either of ***first_course***, ***second_course*** or ***third_course*** property value
* Videos in about section cards can be set by changing ***file*** property value to the name of video uploaded to firebase storage
