# _Portland Brewery List_

#### An interactive webpage using Google Maps API  | March 16-17, 2016

#### By: Yvonna Contreras & Jared Beckler

## Description

Portland Brewery List: Users come to the site and enter input into the Google Map search bar, which returns locations on the map based on their search.
The user can click on an icon on the map and an information window will pop up with the name, address, and rating of the place. The user can click the button
to add that place to their list which appends under the map.

## Setup/Installation Requirements

1. Go to this address in your browser to obtain an API key: ```https://developers.google.com/maps/documentation/javascript/```
2. Open Terminal and clone into this repository: ```https://github.com/jaredbeckler/js-api-breweries.git```
3. Paste your API key into the ```.env``` and ```html``` files.
4. Within the project directory run:<br>
       ```$ npm init ```<br>
       ```$ npm install ```<br>
       ```$ bower init ```<br>
       ```$ bower install ```<br>
       ```$ gulp build ```<br>
       ```$ gulp serve ```<br>
5. Your browser will automatically navigate to the app

## Known Bugs

The same location can be added numerous times, some locations won't add to the user list, we need to find a way to run the app without the api key in the html.

## Support and contact details

If you have any issues, questions, ideas, or concerns contact us through GitHUb. If you would like to make a contribution to the code, feel free to do so and notify me by e-mail.

## Technologies Used

* JavaScript
* Google Maps API
* Bootstrap
* GIT
* NPM
* Node
* Bower 
* Gulp 
* SCSS


### License

Copyright (c) 2016  |  Yvonna Contreras & Jared Beckler  |  Epicodus  |  Portland, OR
