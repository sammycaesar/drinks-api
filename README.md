
### Welcome to Cafe Drinks API! ☕
This API is a recipe list of cafe drinks you can make at home. Inspired by Korean Cafe Vlogs on Youtube. Please be aware this project is still in PROGRESS! Meaning there are only basic capabilities at this point of time.

You can find the live link here: https://kafe-drinks.herokuapp.com/drinks


### Support Features
* Public (non-authenticated) users can access all causes on the platform


### Installation Guide
* Clone this repository [here](https://github.com/sammycaesar/drinks-api).
* The develop branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can either work with the default mLab database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables.


### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /drinks | To retrieve all drinks on the platform |

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.

### License
This project is available for use under the MIT License.
