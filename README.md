TIPS
-------
- Name your controllers and models as the same name as your table! ( model/tableName.js OR controller/tableName.js )
- Have a subfolder for your jsx files in views. Name the subfoler as the same name as your table! ( views/tableName/homepage.jsx )


TL;DR
-------
- NPM INSTALLS:
   pg
   url
   express
   method-override
   cookie-parser
   express-react-views
   react
   react-dom

Flow chart:
- Nodemon index.js > db.js > models/x.js > db.js > index.js > routes.js > controller/x.js > responses such as render('views/x/name.jsx')


// ------------------ WHAT DOES index.js DO? ------------------
// 0 - nodemon index.js
// 1 - Set configurations (See below).
// 2 - Link to and Calls db.js. db.js will return functions results.rows from Postgres (See db.js). Stores function result.rows as const
// 3 - Call routes and pass const functions for result.rows
// 4 - Listen on Port 3000


// ------------------ WHAT DOES db.js DO? ------------------
// 0 - Gets called by index.js
// 1 - Set configurations for dependencies AND user/database.
// 2 - Link to models/x.js and return function result.rows. (Models = Query functions [Example: SELECT * FROM table]) It is the function, not the data!
// 3 - Stores functions result.rows and export it as an object.
// 4 - Return exported objects (function result.rows) back to index.js


// ------------------ WHAT DOES models/x.js DO? ------------------
// 0 - Gets called by db.js
// 1 - Write your functions for selecting the appropriate data
// 2 - Stores your function as an object (to be used later)
// 3 - Export it back to db.js


// ------------------ WHAT DOES routes.js DO? ------------------
// 0 - Gets called by index.js. Takes in allModels (The object with ALL functions of Query that will obtain results.rows)
// 1 - Declaring requirement for controller and allModels.
// 2 - Decide which URL will call which Controller Callbacks.


// ------------------ WHAT DOES controllers/x.js DO? ------------------
// 0 - Gets called by routes.js. Takes in db.js
// 1 - Declaring functions that decides the appropriate response. (Render/redirect/send). If jsx file is rendered, call jsx files.
// 2 - Stores your function as an object (to be used later)
// 3 - Returns responses functions as object to be executed when URL is entered
