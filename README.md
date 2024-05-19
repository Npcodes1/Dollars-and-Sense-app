# Personal-Project
## DOLLAR$ & $EN$E- Financial Tracker

### Goal
- The goal of this project is to build a financial tracker using React as my personal project.

### Purpose of Project
- The purpose of the project is to help minority individuals budget and save for their first house while also providing financial literacy to increase their knowledge.

### Inspiration behind Project
- As a millennial, I was talking to my friends around my age and realized that the ones who were in a single income household were not close to being financially ready to buy their own home, despite wanting to. I did research and discovered that the average age for someone buying their first home is around 36 years of age and that millennials are having difficulties due to the increasing housing market prices, the economy, and supply/demand. Even more, the demographic who are able to buy their first house is predominantly white. 

- So I decided to create a project that focuses on helping minorities learn more about housing and budgeting to be able to bridge the financial gap and help them buy their first home.

### Chart.js
## Getting Started
- https://www.chartjs.org/docs/latest/getting-started/

## Installation
    Installation
    npm
    npm npm

    npm install chart.js
    
            Copied!
        
    CDN
    CDNJS
    cdnjs

    Chart.js built files are available on CDNJS :

    https://cdnjs.com/libraries/Chart.js

    jsDelivr
    jsdelivr jsdelivr hits

    Chart.js built files are also available through jsDelivr :

    https://www.jsdelivr.com/package/npm/chart.js?path=dist

    GitHub
    github

    You can download the latest version of Chart.js on GitHub .

    If you download or clone the repository, you must build Chart.js to generate the dist files. Chart.js no longer comes with prebuilt release versions, so an alternative option to downloading the repo is strongly advised.


### Coding Progress Diary
- 02/27/24- Worked on navigation bar and footer for personal project and making them responsive. I also added a button where it will take me back to the top when I click on it. I tried to use getFullYear() to add the current year for the footer but it's not working. I will start working on adding more content to my pages.

- 03/01/24- I made the bottom navigation bar for the mobile and tablet size. It was a little tricky trying to incorporate two different navigation bars and knowing when to hide it or show it.

- 03/03/2024- Finished the Credit Score page. I was able to fix an image I had added. It was overlapping with the bottom navigation bar when it was in mobile size. I remembered about the z-index and was able to apply it to both the bottom navigation, the image div, and the footer to get the image to scroll underneath the navbar while also maintaining the smooth transition of the navbar disappearing and the footer appearing.

- 03/06/2024- Received feedback from CodeSquad mentor, Kit. Worked on implementing the copyright at the bottom of the pages using JavaScript. Also, brainstorming possible additions to include on the homepage.

- 03/07/2024- Tried to incorporate copyright date using new Date() method with JavaScript. I thought I couldn't use document.getElementById() since I was planning to set all the pages with the copyright date and I was using the same id. So, I tried using document.QuerySelectorAll and also document.getElementsByClassName and nothing was working. Eventually, I realized that apparently ids are supposed to be used only once per page not document. I rewrote my code and used template literal to write out the message while being able to include the currentYear variable containing the new Date() method. I was able to successfully copy and paste my copyright code to each page.

- 03/10/2024- I felt like the website was too block-ish, so I rounded the corners of the sections using the border-radius. I also added a little quiz with three questions to decide if this is the website for the user. I struggled with the JavaScript for this because when I clicked on the yes/no buttons, I tried to put an if/else statement to keep count of the answers and if it was a certain number, then it was supposed to say whether or not this site was for the user. I'll have to work on fixing it later when I understand more about DOM Manipulation.

- 03/26/2024- Created a new branch called VER-6. I needed to fix the quiz that I put on my index.html page. I was able to get it to register whenever one of the radio buttons has been clicked, but I can't get it to check if the value was "yes" or "no" and calculate the score accordingly. The purpose of the score is to decide whether the user needs this website or not. I'll try to work on it again tomorrow.
  
- 03/27/2024- I added more text to my homepage. I'm learning about chart.js with the hope of adding a pie or bar chart that will compare the statistics I found that showcases the demographics for first time home buyers. I also continued to work on my quiz. I tried to refactor the code so that I used a forEach loop to add event listeners to each input field so it would activate the calculateAnswers function when one of the inputs, whether it is "yes" or "no", was pressed. Then, I wanted the calculateAnswers function to look at each input value and calculate the score based on the number of "yes" and "no" answers received. Once, the submit button was pressed, the score was supposed to be used as a parameter for the getFinalResult function and output the message on the screen if this site is for the user or not. However, there seems to be a problem with my calculateAnswers function and it can't seem to get the value of the input that was selected. I will try to work on it again tomorrow and going to office hours for help, if I'm able to.

- 03/29/2024- I was able to successfully implement a pie chart onto my homepage using Chart.js. I used a script tag that was on the chart.js website but for my next goal, I want to be able to install chart.js with npm so I can get practice with installing packages. As for my quiz, I was able to get it to find the value of the radio button that was clicked. I'm still working on how to get it to calculate a score based on that to output a message.

- 04/03/2024- I worked on my quiz.

- 04/04/2024- I worked on my quiz. I was able to get it to score.

- 04/12/2024 - I worked on my quiz. I was able to get it to work properly! I just needed to add the score variable and set it to 0 before the for loop so it would reset and start at 0 again when the next question was selected. I also added a clear button so it would reset in case the user wanted to retry the quiz. I removed the border around the quiz and adjusted the submit and clear so it was centered and responsive. I also created the handler functions, the userData mock database and linked the siteCtrl file with the siteRouter.

-  04/15/2024 - Worked on the backend, making the routes for each page.

-  04/16/2024 - I continued working on the backend, creating a formData mock database (to mimic when forms are submitted on the website) and moved the login and forgot-login routes and handler functions into the authRouter and authCtrl files, respectively. It's still a little confusing trying to understand everything but I think I'm understanding that the backend is looking for data upon request and if it's found in the associated database, then it will gather that data before sending back to the controller which forwards the data to the designated location (through the route).

- 04/21/2024 - Added routes and handler functions using the CRUD operations. Need to confirm if it's possible to use handler functions in different routes. Like for the admin, if I wanted the ability to create, update, or delete the formData that's collected from when a user submits a form and also do the same for the usersData, is it possible?

- 04/22/2024 - Worked on touching up styles on pages.

- 04/25/2024 - Reworked the styling of the HTML pages. Because I had the same contact form on every page of the project, I was having trouble figuring out how to route the form information from each page to the admin page. So I decided to create a new HTML page called Contact and put the contact form there. Then I removed the contact forms from the rest of the pages but put a link on the "Get in Touch" so it'll direct to the contact page. Also, added media queries to scale the pie chart so it's mobile friendly.
- 04/28/2024 - Worked on the routes and controller files.
  
- 04/29/2024 - Continued working on the routes and controller files and started adding the model files.
  
- 04/30/2024 - Worked on setting up MongoDb and continued refactoring the model files. Also started refactoring html code for the sign up form.

-05/03/2024 - separated routes and handler functions into specific files and refactored code.
  
- 05/13/2024 - created a new branch to start building my financial tracker. Having trouble with adding and removing inputs. Also, tested my routes using Postman and started brainstorming the reason for my send message on my contact form not working. Will try again tomorrow. 

-05/14/2024 - added mock data to MongoDB Atlas to fix getAll messages, getMessage, getAllUsers, and getUser routes. Also, refactored code and started setting up authentication.

-05/17/2024 - Set up Google and GitHub Authentication on my project.

-05/18/2024 - Worked on reconfiguring my routes and controllers so it wasn't so confusing. Also, finished setting up Authentication.

-05/19/2019 - Tested my routes to make sure they were working properly and finished my backend routes for my tracker. I started writing out my route paths and putting the purpose and the links in an excel spreadsheet because there were so many (around 35 last time I checked.) It's really hard trying to test the post/put/delete routes in Postman because I'm not sure if it's still supposed to be functional or not. When everything was finished and checked, I started the process to deploy on Render.