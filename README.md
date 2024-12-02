# Monsterland Meka website

This project generates the Monsterland Meka [website](https://monsterlandmeka.com/)

Technologies used:
* Node.js
* React
* Typescript

Features:
* Routing (client-side)
* Image lightbox integration

## Prerequisites

* **Git:** Ensure Git is installed on your Windows machine.
* **Node.js:** Runs server-side JavaScript to test and build the website.
* **npm:** The Node package manager used to install dependencies and run test/build scripts.

## Getting Started

## Setup

1. **Clone the repository:**
   * Open Git Bash.
   * Navigate to the directory where you want to store the project.
   * Clone the repository: `git clone git@github.com:andrewmelvin-dev/monsterlandmeka-website.git`

2. **Navigate to the project directory:**
   * `cd monsterlandmeka-website`

3. **Install required packages:**
   * `npm install`

## Local testing

Run the following command to test the website locally:
`npm start`

## Build the website for remote hosting

Run the following command to build the website:
`npm run build`

The built website will be output to the `build` directory. The contents of this directory can then be copied to a hosting location, such as an Amazon S3 bucket.

## TODO: Future enhancements/modifications ##

* Generate the sitemap and lightboxConfig automatically as part of the build process based on data from a centralised location.
* Allow pressing left/right to navigate the lightbox and pressing escape to close it.
