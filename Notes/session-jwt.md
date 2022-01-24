# Session vs Json Web Tokens

## Key Points:

- What is Session?
- What is Json Web Token?
- When do you use one over the other?

# Things to think about

Sessions are a bit tricky to manage over a cluster of apps but it is not uncommon that companies do this.

JWT are very easy to manage in a cluster but you can never put private data in the token because a hacker can steal it from a user and crack the hash

I find a good rule of thumb for Jwt is to only include the user id but never actually storing the data connected to the id in the token

Use the id to grab the data from the database when the request comes to the system.

JWT also puts the client in a position where it needs to include the token in every request to the system while a session handles everything on the server.
