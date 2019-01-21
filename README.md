# Data Control Scroller
A take-home frontend coding challenge for a company I will keep anonymous for the integrity of their assignment.

## Checklist

### Core Features
- [ ] Use React and Redux
- [ ] Utilize provided JSON files
- [ ] List of items can be horizontally scrollable
- [ ] Details of the items can be vertically scrollable
- [ ] Selected item’s background should change and its description should appear on the top of the `items description container` as shown in the image.

### Bonus Features
- [ ] Make it pretty
- [ ] Smooth scrolling effect
- [ ] Loading animations

### Submission Instructions
- [ ] Used only standard libraries (apart from loading animation which are unrelated to core features)
- [ ] Your code should be clear and well documented

## Rationale
- Styled Components
  - Faster setup than SASS/LESS for projects need to be done quickly
  - Scopes styles to a component to avoid style leaks
  - Linters will show unused components so they can be removed
  - Source order independence eliminates the need to import files in a certain order
  - Compose new styles from existing components
  - Passing properties to the component allows for more flexibility

- Backend Server
  - The assignment did not instruct to create a backend, but in order to simimulate a more accurate flow of data for this assignment, I spun up a simple node.js server to serve the JSON files

## To Run Locally

- Clone the project and `git clone` in a local directory 
- `cd server` and `npm start`
- `cd client` and `npm start`
