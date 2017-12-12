# Emailer
Emailer is an application that I am currently developing. In its current state is used to email surveys and anaylze the data gathered from users.  Users will first sign in using Google OAuth and be redirected to a landing page.  Here the user can purchase credits (5 at a time) and safely checkout thanks to Stripe.  Once credits are purchased the user may create a surve with two options for an answer (Yes or No).  Once desired recipients are entered the survey will be sent out and the user will be charged one credit.  Surveys will be available to review results.  At the current moment I am resolving some clarity issues with Sendgrid's API for emailing users. Once everything is resolved there will be a live demo. 

# Languages and Libraries:

- React
- Redux
- React-Router
- Redux-Promise
- Mongoose
- Concurrently
- Sendgrid API
- Stripe API
- Google OAuth
- Localtunnel
- Axios
- Lodash
- Express
- Javascript
- Node JS
 
# To start login with Google
<img width="895" alt="login" src="https://user-images.githubusercontent.com/24966013/33905360-6045e2bc-df4c-11e7-9b62-fa70d9efe243.png">

<img width="1280" alt="login2" src="https://user-images.githubusercontent.com/24966013/33905362-643f2edc-df4c-11e7-9e0d-c6e410232ffd.png">

# Next add credits using Stripe (This is currently set for testing so using 4242424242... for the credit card number will work with any numbers for the other fields)
<img width="297" alt="pay" src="https://user-images.githubusercontent.com/24966013/33905367-665ba664-df4c-11e7-8005-33ec9d3bc527.png">

<img width="363" alt="credit" src="https://user-images.githubusercontent.com/24966013/33905370-694af79e-df4c-11e7-9f91-3acd8a3c30a0.png">

<img width="346" alt="creditadd" src="https://user-images.githubusercontent.com/24966013/33905373-6b766648-df4c-11e7-8f20-6765c26be4a1.png">

# Once you have credits create a survey. There is form validation in place to detect any errors with a specific email.
<img width="967" alt="reviewrecip" src="https://user-images.githubusercontent.com/24966013/33905376-6f175dc0-df4c-11e7-81fb-a4398c89db3b.png">

# After filling out a desired survey review and send
<img width="909" alt="final" src="https://user-images.githubusercontent.com/24966013/33905381-703a75c0-df4c-11e7-9aea-53d430df6550.png">


