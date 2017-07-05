(if in Atom, 'ctrl + shift + m' will display markdown format)
# The Hog Dimension
This react app will serve as the client and UX for our rails API driven hog experience. You may notice that create-react-app was not used in this project. Take a look at the webpack.config file and familiarize yourself with the entry and build locations. Following that, take a peak at our package.json file.

  A side effect of not using create-react-app means we need to implement our own 'script' aliases for both automatically rebuilding our bundle as well as exposing our port that we want to listen for requests on. As the 'scripts' portion of package.json stands now, we will need to run both 'watch' as well as 'start' to make a hospitable developing environment.

  One solution is to 'npm run watch' in one bash process, then open another (or push the 'watch' to a background process) and 'npm run start'.

  We are using [express.js](https://expressjs.com/) (in index.js) to catch all root requests ('/') to the port we are exposing (localhost:5000) and redirect them to our build output location. This is just like our router in rails/sinatra, but for node! We are also catching all endpoints that we don't know how to handle and sending them to a custom 404 page (Provide any bad endpoint to see it). As far as Node.js backend middleware/frameworks go, Express is the most known name. You shouldn't have to make any changes to this file.

## Deliverables:
  1. First things first -- that background is cool, but it's giving me a hot potato! Unless you are running a L33T MLG gamer rig you may want to disable it while we are developing. Let's make it so neither the canvas element, nor the script that starts it, executes. Potato still cooking? Disable that gif!

  2. Currently, whenever we want to start developing, we have to run two separate bash commands to watch and serve our bundle. That's just crazy! In package.json let's add an additional alias to 'scripts' that both 'watches' as well as 'starts' our index.js file. In bash, we can use '&' to execute multiple processes in a non-blocking manner.

  3. Familiarize yourself with the component structure of the application. There are a lot of moving parts here, and we want to be able to isolate the few areas where we are going to add features.

  4. [While Jeff Goldblum is indeed larger than life](https://www.youtube.com/watch?v=vTZCjCYsytM), this app is about our love for hogs, not the best actor of our generation. Let's replace some of the content on the cube faces with the following:
    - FRONT: A picture of yourself and your name
    - LEFT SIDE: A short blurb on why *you* in particular love hogs
    - RIGHT SIDE: Provide some kind of indicator what our glowing pig is linking to (click the pig to see)

    **These should all be relatively minor changes. Make sure to familiarize yourself with how the sides are resolving their data/css before starting on these!**

  5. In our 'tiled'/'unfolded' (after we click the glowing pig) view we are going to incorporate our hogs api. You will notice we are providing only only hog mugshots right now. We also have each hog's name in the same place its img ref is kept, but we are not using it yet. All other data will be fetched from our rails api.
  - In addition to the hog profile photos on each tile, their name should be displayed. Make a decision on what this should look like (maybe a tooltip, maybe an overlay). As long as the hog name is comfortable to read.
  - When a user clicks on an individual hog tile we want a nice large [modal](https://en.wikipedia.org/wiki/Modal_window) that displays all the additional information about that specific hog that exists on our API. Implement this however you see fit - a new component seems like a good starting place.

  While we could simply fetch all the data from the API when the react app starts up, we know that eventually this will be a hogsperience with over 10k viewable hogs. In anticipation of having more data that we are willing to serve in bulk, we want to ensure a hog's data is only served once the user has provided an indication that they want to access it.

### Bonus:

  1. Re: the three 'handleKeyDownX' functions in cube.component:
      1. 'handleKeyDownCodeGolf'
        - why are we overwriting 'e' instead of assigning a new variable name?
        - would this work if we simply assigned a new variable name?
        - how would 'use strict' affect this?
      2. 'handleKeyDownBoringCompromise'
        - how can I learn to forgive myself for creating this function?
      3. 'handleKeyDownClassicStahp'
        - does the '||' check serve any purpose if the event is always passing both regardless in Chrome?

  **Are any of these functions ideal for expressing what we want to do? Discuss this with [a] classmate[s]. Choose one or write a refactored one**

  2. After a user activates an api call to fetch a hog's data, does it make sense to store that on the client's end instead of always re-fetching the data?
    - Implement a feature that, if the user has already accessed a specific hog's data, allows the client to only make each specific api call once.
    - Describe the limitations of this feature as our number of accessible hogs scales. What are some other solutions we can implement for a scaling data pool?

  3. Refactor our application so that when a user presses backspace when viewing a single hog's modal/info page, we should return back to the 'unfolded/tiled' view of our hogs. Do the same to revert the cube from its 'unfolded/tiled' state back to its natural state. There are many ways to skin this cat, though one react library in particular (that we have been working with) jumps to mind.

  4. Our tile slide out animation is cool, but what we really want to do is provide an effect that makes it appear as though our cube is 'unfolding', instead of tiles sliding out. Implement this for a new side. Check out our helpers/cubeAnimator.js file for an idea where to get started.

  5. While our current application has the skeleton for a 'rotate to opposite end' feature, it is not currently hooked or completely implemented. Incorporate the ability for our cube to rotate to the opposite face without altering current functionality.
