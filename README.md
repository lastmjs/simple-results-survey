# Simple Results

This repository will allow you to quickly host and publish a website for displaying data from public Google Forms spreadsheets.

## Example
Check out a live example website [here](http://lastmjs.github.io/simple-results).

## Setup Instructions
* Log in or sign up for a GitHub account
* Fork this repository by clicking Fork in the upper right-hand corner of this page (this page refers to the [repository homepage](https://github.com/lastmjs/simple-results))

You now own a copy of the repository code at github.com/yourgithubusername/simple-results. 
Once you hook up your spreadsheet url and form url and wait a moment your website will be live at yourgithubusername.github.io/simple-results

The only thing left to do is hook up the Google spreadsheet url that contains the data you would like to display, along with its associated form url:
* You must publish your spreadsheet to the web. THIS IS NOT THE SAME AS SHARING. Follow these instructions exactly: [publish your spreadsheet to the web](https://support.google.com/docs/answer/37579?hl=en)
* Go to your repository homepage at github.com/yourgithubusername/simple-results
* Switch your repository to the gh-pages branch by clicking Branch -> gh-pages in the top left corner
* Edit the file "spreadsheet-url.txt" in your newly created repo, and completely replace the contents of the file with your spreadsheet's public url
* Commit the file "spreadsheet-url.txt" by clicking Commit changes
* To change the logo title of your webpage, edit the "page-title.txt" file in your newly created repo and then commit the changes
* Your website should shortly be live at yourgithubusername.github.io/simple-results

## Displaying Data

Your data will not display on the homepage until you choose which columns from your spreadsheet to include in the homepage rows:
* Go to your spreadsheet
* To include a column, wrap the column value [], i.e. [Name], [Date of Birth], [Status]. 
* Now the rows on your homepage will display the data for the Name, Date of Birth, and Status columns
* IMPORTANT: Every time you edit your form, you will have to re-wrap the columns in square brackets

## Using a Custom Domain Name
You are not stuck with the yourgithubusername.github.io/simple-results url. You can use a custom domain name if you like. Follow the instructions [here](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/).

## Terms
Since when forking this repo you will become a client of a Google api, you must agree to the terms found [here](https://github.com/lastmjs/simple-results/blob/master/TERMS).
