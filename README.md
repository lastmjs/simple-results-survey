# sheets-webpage

This repository will allow you to quickly publish a website for displaying data from public Google Forms spreadsheets.

## Example
Checkout what this repo looks like live [here](http://lastmj.github.io/websheet).

## Setup Instructions
* Sign up for a GitHub account
* Fork this repository (click the Fork button on the [repository homepage](https://github.com/lastmj/sheets-webpage))

You now own a copy of the repository code, and once you hook up your spreadsheet and wait a moment your website will be live at yourgithubusername.github.io/websheet

The only thing left to do is hook up the Google spreadsheet that contains the data you would like to display.
* Make sure to [publish your spreadsheet to the web](https://support.google.com/docs/answer/37579?hl=en)
* Switch your repository to the gh-pages branch by clicking Branch -> gh-pages
* Edit the file "sheets-url.txt" in your newly created repo, and completely replace the contents of the file with your spreadsheet's public url
* Commit the file "sheets-url.txt" by clicking commit
* To change the logo title of your webpage, edit the "page-title.txt" file in your newly created repo and then commit it
* IMPORTANT: You need to make some kind of change to a file and commit it before your website will be live

## Displaying Data in Rows

Your data will not display properly in rows on the homepage until you choose which columns from your spreadsheet to include. To include a column, wrap the column value in [], i.e. [Name], [Date of Birth], [Status]. Now the rows on your homepage will display the data for the Name, Date of Birth, and Status columns.

## Terms
Since when forking this repo you will become a client of a Google api, you must agree to the terms found [here](https://github.com/lastmj/websheet/blob/master/TERMS).
