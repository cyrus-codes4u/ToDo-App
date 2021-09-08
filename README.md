# ToDo-App

> Track your to-do items with Rapptr labs

## Running the Application

- Fork and clone this repository on your local machine
- Run `npm i` then `npm run start`

## Time Management

I approached this project in these 5 phases:

1. Mapping the Architecture

- 2 hours
- Using pen and paper before approaching the code, I made two important decisions about the architecture of my app. The first was that I wanted to have globally accessible state managed through Redux. So I had to map which states I wanted to track, how I wanted to be able to modify them, and where in the app these actions would need to be called. The second was the component structure of the app. Deciding where to code-split and what components could be reusable took another hour or so.

1. Creating Redux store

- 1 hour
- With the planning I had done, this stage was very quick to execute.

1. Creating Components

- 3 hours
- Like the redux store, after the planning stage, writing the components was fairly simple. There was a fair amount of time spent testing screens and frames with dummy data. Only simple layout styling was added at this stage.

1. Implementing Redux in Components

- 2 hours
- Initial implementation was quick and simple. Again, debugging took the majority of the time. Particularly, ensuring that the lifecycle of the ToDoList component synced with changes to the list of items took some time. For data persistence, this is also when I updated Redux actions to interact with localStorage.

1. Finer styling

- 1/2 - 1 hour
- Beyond layout, which I had implemented prior, I just wanted to pair colors and gradients to create an aesthetically pleasing but simple design. I also added conditional styling at this stage per the requirements.
