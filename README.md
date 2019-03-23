# Google-Books-Search

## Introduction
Hello! Google Book Search is an application that allows 
users to search for books using the Google Books API and 
save them for future viewing. It utilizes React.js on the frontend, and Node.js, Express, and MongoDB on the backend.

Please see the live link below as well as a screenshot of the application!

Live link: https://fathomless-journey-73583.herokuapp.com/


![alt text](LIRIBotScreenshot.png "LIRI Bot Screenshot")

Please read on for more information!

## Technologies
Node.js - JavaScript if/else statements, loops and module import<br/>
.env<br/>
FS node module<br/>
Axios node package<br/>
OMDB Movie Database API<br/>
Spotify API and node package<br/>
BandsInTown API<br/>
Moment.js node package


## Methodology 
The general principle applied in this project was grabbing user input and using that as a query for various api calls. For example, if the user typed "concert-this" as their first input, followed by a band name, the program read the first input as direction to use the BandsInTown API and query the band name the user entered. Once the JSON object was returned, the data was parsed and displayed to the user in the terminal. Also, for the final part of the assignment "do-what-it-says", the program uses the fs module to read the data from a local file, parses it and inputs it in a query to an API. This project served as a great start to Node.js and backend development.

Please reach out with any questions!

