# Donatr

To use:
```
npm install
npm start
```

Then go to localhost:3000

go to https://donatr-jaapokki.herokuapp.com/ to see the live version

## React

This app is written using React. 

In the `src/` directory, there are a bunch of `.js` files. Each one of these is a component. A component is basically just a visual UI element.

The main, overall component is the App component, in `App.js`.

The `render()` function at the bottom of `App.js` shows that the overall app will display the Header and then whatever contents are dictated by the logic underneath the Header component.

### State and props

The main cool thing about React are `state` and `props`. Basically, the `state` of the component dictates what the current rendering state of the component is. So, for example, I keep track of which page (component) should be displayed in App's `this.state.page`. I also use it to check if the user is/isn't logged in.

At the top of some components, you might see a function called `constructor()`. In the constructor is where you set the initial state of that component. Also, in React you have to do this annoying thing where you have to do `.bind(this)` after every function declaration in order for you to use the `this` keyword. Pretty annoying, because the `this` keyword is necessary to access the state and props.

Props are how you pass information from a parent component (`App`) to a child component (`SchedulePickup`). Basically, when I want to render the `SchedulePickup` component in the `getContents()` function, there is the case for when this.state.page === pages.schedulePickup.

#### Example

Here you will see that I have written:

``` Javascript
<SchedulePickup title={this.state.result.title + (this.state.center ? " employee" : " volunteer") + " pickup"} center={this.state.center} togglePickup={this.handleChangeCenter} goBack={this.handleBackToResult} />
```

The things where it's like `title={stuff}` are how I am passing information to the SchedulePickup component.

In `SchedulePickup.js` there are places where I call `this.props.title`. This is where it comes from! Props allow you to pass information to a child component so that child component can render based on whatever logic you have stored in the parent component (sorry, that sentence might be confusing).

### Logic used for controlling pages

As I mentioned, in App there is a getContents function.
This basically decides which component will be displaying in where the `{ this.getContents() }` is in the `render()` function.
It works because, if you look inside of the `constructor()` function all the way at the top of `App.js`, you will that in the `state` there is a `currentPage`. This is where I keep track of the current page :) 

### Callbacks
So different pages require different things to happen when certain elements are clicked or when things are typed, etc.
This is done by callbacks.
For example, many components (such as Buttons, etc) have an `onClick` prop. Whatever function I list as the onClick prop will get called when that component is clicked! Thus, I can pass information up by having the original function be in the `App`.

### Bootstrap
Google react bootstrap and then you will find their website where it has a bunch of different example components and examples of how to use them all. That's what I used! 
https://react-bootstrap.github.io/components.html

I used a bunch of things from bootstrap. At the top of every file it'll say something like
``` Javascript
import { Button, FormGroup } from 'react-bootstrap';
```
That means that react-bootstrap has built-in Button and FormGroup components that I can just use like regular components.
See their website for all of their components and how to use them all (there are tons of examples, and I just compied their examples).


