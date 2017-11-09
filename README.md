# Donatr

To use:
```
npm install
npm start
```

Then go to localhost:3000


## React

This app is written using React. 

In the `src/` directory, there are a bunch of `.js` files. Each one of these is a component. A component is basically just a visual UI element.

The main, overall component is the App component, in `App.js`.

The `render()` function at the bottom of `App.js` shows that the overall app will display the Header and then whatever contents are dictated by the logic underneath the Header component.

The main cool thing about React are `state` and `props`. Basically, the `state` of the component dictates what the current rendering state of the component is. So, for example, I keep track of which page (component) should be displayed in App's `this.state.page`. I also use it to check if the user is/isn't logged in.

Props are how you pass information from a parent component (`App`) to a child component (`SchedulePickup`). Basically, when I want to render the `SchedulePickup` component in the `getContents()` function, there is the case for when this.state.page === pages.schedulePickup.

Here you will see that I have written:

``` Javascript
<SchedulePickup title={this.state.result.title + (this.state.center ? " employee" : " volunteer") + " pickup"} center={this.state.center} togglePickup={this.handleChangeCenter} goBack={this.handleBackToResult} />
```

The things where it's like `title={stuff}` are how I am passing information to the SchedulePickup component.

In `SchedulePickup.js` there are places where I call `this.props.title`. This is where it comes from! Props allow you to pass information to a child component so that child component can render based on whatever logic you have stored in the parent component (sorry, that sentence might be confusing).


At the top of some components, you might see a function called `constructor()`. In the constructor is where you set the initial state of that component. Also, in React you have to do this annoying thing where you have to do `.bind(this)` after every function declaration in order for you to use the `this` keyword. Pretty annoying, because the `this` keyword is necessary to access the state and props.

