# Data Control Scroller

This is a take-home frontend coding challenge for a company I will keep anonymous for the integrity of their assignment.

## Checklist

### Core Features

- [X] Use React and Redux
- [X] Utilize provided JSON files
- [X] List of items can be horizontally scrollable
- [X] Details of the items can be vertically scrollable
- [X] Selected item’s background should change and its description should appear on the top of the `items description container` as shown in the image.

### Bonus Features

- [X] Make it pretty
- [X] Smooth scrolling effect
- [X] Loading animations

### Submission Instructions

- [X] Used only standard libraries (apart from loading animation which are unrelated to core features)
- [X] Your code should be clear and well documented

## Rationale

- Styled Components
  - Faster setup than SASS/LESS for projects need to be done quickly
  - Scopes styles to a component to avoid style leaks
  - Linters will show unused components so they can be removed
  - Source order independence eliminates the need to import files in a certain order
  - Compose new styles from existing components
  - Passing properties to the component allows for more flexibility

- Backend Server
  - The assignment did not instruct to create a backend, but in order to simimulate a more accurate flow of data for this assignment, I spun up a simple Express server to serve the JSON files
  
## Additional Info

#### Features I would add given more time
- Unit tests for each component
- Proptypes for each component
- A carousel for the horizontal scroller (vs back & forth)
- A search bar for details

#### Deployment
- The frontend is hosted on Netlify at [data-controller.netlify.com](https://data-controller.netlify.com/)
- The backend is hosted on Heroku
  - Please note that if the Heroku server is asleep, it can take a few seconds for the data to load into the UI

## To Run Locally

- Clone the project and `git clone` in a local directory 
- `cd server` `npm install` `npm start`
- `cd client` `npm install` `npm start`
