# Christians on Campus

## Background and Overview
Christians on Campus is a website for the UC Berkeley student organization, Christians on Campus at Berkeley, that serves as the primary avenue of social media outreach and club announcements. The [original site](http://christiansoncampus.info) was built on Wix. This project is a rebuild of that website using a MERN stack. Because this project is meant to be more of a study and exercise, and not a production-level website, it is not deployed live, and does not reflect up-to-date information regarding the student organization itself.

To see for yourself:
1. Download the ZIP file
2. Run `npm run server` in the top level directory to start the Express server
3. Run `cd client` in a different tab.
4. Run `npm run start` to start the React development server.

### Limitations of Wix
Apart from this project being an exercise to learn the MERN stack, as well as Enzyme and Jest unit testing, I wanted to see if some of the frustrations we encountered in using Wix could be solved. Some key limitations when we were building with Wix were the following:

**Maintaining Experience:** This was by far the biggest limitation that we found. In order to update the site with fresh content, a lot of work had to be done manually. If we wanted to update a font across the site, there is not an easy way of confirming that all types of a certain category had been updated. If we wanted the same banner element to be updated in two locations, we had to upload an image, and update each manually.

Solution: creating a central admin page in which an authorized user could change key elements on the page in one location. This could include site colors, fonts, banner elements, member testimonials, etc. Rather than having content like testimonials or club videos be hard-coded into the HTML (which is how it is done under the hood using Wix), testimonials and club videos can be added to the database, and fetching logic will handle serving the correct information to the React frontend. 

**User Experience:** There is a set of predesigned user interaction elements that we could use. We implemented many hover elements and banner elements. However, behaviors could not be fine-tuned. Additionally, the website loaded very slowly. This is due to a combination of loading very large images, and many hard refreshes. It is not a single page application, and thus the loading time is noticeably present. On an older computer, it could take upwards of 5-10 seconds for the landing page to load.

Solution: React significantly boosts the loading time by turning the site into a single page application. Even basic HTML and CSS increases the breadth of user interaction that are possible. Using a service such as AWS S3 could lighten the load on the Express server to further improve loading speed.

## Features
This section describes the impelemented features of the original site, but not every feature listed here has been implemented in this project. Additionally, very few graphics or pictures have been uploaded. 

**About Us:** Introduces the club and its mission

**Activities:** Lists the most common activities that the club holds

**Upcoming:** Lists all the upcoming club activities and events

**Media:** Stores various media (photo, video, text) across the website

**Blog:** A blog of short articles written by club members

**Contact Us:** A contact form that feeds responses into a Google sheet

## Architecture and Technologies
* MongoDB with Mongoose
* Node.js backend with an Express.js framework
* React front-end (React Hooks) with Hookrouter library
* Enzyme and Jest for unit-testing
* Axios for making AJAX calls from the React front-end to the Express API server
* Sass for modular CSS structure
* Canva for creating graphics

## Future Implementations
1. Adding an admin page to allow website administrators to change the content of the page from one singular location
2. A media page
3. Adding the blog
4. Adding pictures and graphics
5. Making the website responsive