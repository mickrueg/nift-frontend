# Welcome to NiFT

A web application that allows users to learn about NFTs, read related news articles, and explore the actual NFT marketplace. Users can save articles and NFTs to their account for future reference.

## Installation
#
The live web application can be accessed at [NiFT Web Application](https://nift-app.netlify.app/). Other links:

> Github
> - [Front End Code](https://github.com/mickrueg/nift-frontend)
> - [Back end Code](https://github.com/mickrueg/nift-backend)
> 
> Live
> - [Front End](https://nift-app.netlify.app/)
> - [Back End](https://nift-backend-two.herokuapp.com/)

## Front End Technologies
#
### Code Base
NiFT was built with React JS and CSS. 
### Animations
The app uses a variety of important CSS animations to create an interactive and enjoyable user experience. Some key animations include:
- Start Page Digital Wave
    - Created using svg file and key frames
    - The key frames move the svg file to the right and down by one unit
    - The svg file is assigned the animation on an infinite loop
    - The end result is that the wave appears to be on a continuous flow
- NFT Info Modal Push
    - Used a combination of React State and CSS to push the page to the left when a user clicks on an NFT
- Auto Refresh when an item is deleted from Saved Page
    - Used React Context to track the changing of state
    - When a user deletes a record, UseEffect is triggered to rerender the Saved Folder

## Back End Technologies
#
### Password Encryption

Bcrypt is used to hash the users' passwords at initial account creation and check their passwords at login.

- Create Account
    - In a post request, the user's password is sent through bcreypt.hash
- Login
    - In a post request, the user's password is sent through createUserToken method
    - If a token is created, then bcrypt verified the password is correct
    - If a token fails and an error is printed, then the password does not match the original

## Original Wireframe
![Original NiFT Wireframe](src/assets/NFTProjectWireframes.png)