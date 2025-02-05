//The Path module provides a way of working with directories and file paths.
const path = require('path')
const jsdom = require('jsdom');
//To use jsdom, you will primarily use the JSDOM constructor, which is a named export of the jsdom main module.
const { JSDOM } = jsdom;

const renderDOM = async (filename) => {
  //The process.cwd() method is an inbuilt application programming interface of the process module which is used to get the current working directory of the node.js process.
  const filePath = path.join(process.cwd(), filename);
  //Similar to fromURL(), jsdom also provides a fromFile() factory method for constructing a jsdom from a filename
  // To enable executing scripts inside the page, you can use the runScripts: "dangerously" option
  //If you want to execute external scripts, included via <script src="">, you'll also need to ensure that they load them. To do this, add the option resources: "usable" as described below. (You'll likely also want to set the url option, for the reasons discussed there.)
  const dom = await JSDOM.fromFile(filePath, {
    runScripts: 'dangerously',
    resources: 'usable'
  });

  return new Promise((resolve, _) => {
    // When using the JSDOM constructor, you will get back a JSDOM object, which has a number of useful properties, notably window and document to use below
    // We're basically are saying: 
    // We wait for the DOM content to have loaded and then we can resolve the promise
    dom.window.document.addEventListener('DOMContentLoaded', () => {
      resolve(dom);
    });
  });
};

module.exports = { renderDOM };
