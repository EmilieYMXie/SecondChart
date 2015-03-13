# SecondChart

Chart template taken from https://developers.google.com/chart/interactive/docs/gallery/columnchart#Configuration_Options

Data taken from https://data.cityofnewyork.us/Business/Legally-Operating-Businesses/w7w3-xahh, used Google Refine then 
Mr. Data Converter to first edit the cells by clustering industries together and then converting to JSON properties. 

Was able to separate scripts.js and create a styles.css file to alter border of barchart. Tried various ways to alter color but 
could not. Tried to separate data into a data.js file in various ways but could not, received the error "You called the draw() method with an Array rather than a DataTable or DataView×"

Used a barchart because the data lended itself to this style of visualization, making it easily undestood which industry is
most commonly found.
