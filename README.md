# MERN Stack AI Chatbot

This is an AI Chatbot application, by using MERN Stack and OpenAI

It's a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted, but no previous conversation can be viewed.

This application is using JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains.

Step 0a: Create a mongo db and get the url with secret embedded

Step 0b: Create OpenAI Api accoun and get the API secret key, and org id

Step 1: Update the env_sample file and rename to .env put some random string for JWT_SECRET & COOKIE_SECRET

Step 2: cd into /backend & /frontend folder separately then run below commands one by one

Step 3: npm i

Step 4: npm run dev
