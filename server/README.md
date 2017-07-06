(if in Atom, 'ctrl + shift + m' will display markdown format)
# The Hog Dimension - Rails Server
This rails server will act as a lightweight api from which our React application can request juicy hog data. Our seed data for seven plump hogs is located in the root of the project (porkers_data.json).

## Deliverables:

  1. We would like to expose our hog data to our React client. It goes without saying that our hogs are very important, and deserve nothing less than the security JWTs provide. All sensitive information requests (which are all requests pertaining to hogs) should be done using JWT. You will have to decide whether to implement a user login on the client side or have some other form of initial communication. I recommend doing the simplest option first then building out from there if more functionality is desired.

### BONUS:
  1. Our application currently has no need for any 'POST' handling (all messages from the React clients are 'GET' requests). Implement the ability to add new hogs to the database via JSON (verified with JWT) from our React application.
