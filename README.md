# OpenHouse.Ai Property List

This application is a property listing platform built with React and Material UI. It fetches data from a JSON API and displays a list of communities and homes. Each community is represented by a card that includes an image, the community's name, group, and the average price of homes in that community. When a community card is clicked, it expands to show a list of homes in that community, with details about each home's type, price, and area.

## Components

The application is composed of several components:

- `App`: The root component that fetches data and handles loading and error states.
- `Header`: Displays the application's title.
- `CommunityList`: Renders a list of communities. Each community can be expanded to show a list of homes.
- `List`: Renders a list of homes in a specific community.
- `useFetchData`: A custom hook for fetching data from a given URL.

## Deployment Considerations

When deploying this application to a server, please consider the server's proxy settings. The application fetches data from a third-party API, and you may encounter CORS (Cross-Origin Resource Sharing) errors if the server's proxy is not configured correctly. To resolve this, you may need to adjust the server's proxy settings or use a CORS proxy.

## Running the Application

To run the application, first install the dependencies with `npm install`, then start the application with `npm start`. The application will be available at `http://localhost:3000`.

## Follow Up Question

Q: If given more time, how would you improve the quality of your application? Would you implement anything differently?

A: If I have more time to complete this app, I will consider creating a layout similar to Google Maps or Realtor.ca, which requires the Google API as well as an npm package called react-google-maps. I plan to display the communities in a list on the left and a Google Map component on the right. When a user clicks on one of the communities, house properties will be indicated with markers on the Google Map. This will provide better visualization for the user, giving them a clearer idea of the geolocation of surrounding areas, including schools, transit, and other interesting destinations they might be searching for.

![App Image 1](https://drive.google.com/uc?export=view&id=13SD0yTFSlo2LXWbfoXck4jMB7yhAUYKf)
![App Image 2](https://drive.google.com/uc?export=view&id=13QzgslAe6cdQZFU9OpA9bsr-abS4seiw)
![App Image 3](https://drive.google.com/uc?export=view&id=13aIAiaTCmNON39Q4CUg1mnlQyIV7LUM1)