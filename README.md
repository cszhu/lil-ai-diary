# Personal AI Diary

![Personal AI Diary Screenshot](https://media.discordapp.net/attachments/670227543688740864/1130774466557923398/image.png)

The **Personal AI Diary** is a coding project I implemented incorporating journal-type user input and AI. The system facilitates users to log their thoughts, which then generates a related AI response powered by OpenAI's GPT-3 model. Currently, the application doesn't store any user data, ensuring absolute privacy.

In essence, it's a programming sandbox for introspection, where users input their thoughts and receive insightful machine-generated responses that can provide new perspectives. A key point to note is that on refresh, entries are not retained. For the future iterations of this project, I aim to include Stytch authentication and add a feature to store user sessions and diary entries in a database, giving users a seamless and more interactive experience.

This project was initialized using the [Stytch](https://stytch.com) + [Next.js](https://nextjs.org/) demo project, derived from [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

**Check out a live version of this site [here](https://www.stytchdemo.com).**

For user authentication, I've used the SDK with React component from Stytch integrating the [OAuth logins](https://stytch.com/products/oauth) auth flow.


# Running locally

## Setting up Stytch

You'll need your Project's `project_id`, `secret`, and `public_token`. You can find these in the [API keys tab](https://stytch.com/dashboard/api-keys).

You will also need an [OpenAI API key](https://platform.openai.com/account/api-keys) to make calls to OpenAI. Make sure you add that in as well.

Once you've gathered these values, add them to a new `.env.local` file.

```bash
cp .env.template .env.local
```

Next we'll configure the appropriate redirect URLs for your project, you'll set these magic link URLs for your project in the [Redirect URLs](https://stytch.com/dashboard/redirect-urls) section of your Dashboard. Add `http://localhost:3000/authenticate` as both a login and sign-up redirect URL. 
## Running the example app

Install dependencies by running

```bash
npm install
```

You can then run a development server using:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Note:** By default this example app enables Google for OAuth. If you haven't set up Google OAuth  in your [Dashboard](https://stytch.com/dashboard/oauth), you'll receive a redirect error when you attempt to login via those providers. 

## Documentation

Learn more about some of Stytch's products used in this example app:

- [Stytch Web SDK](https://www.npmjs.com/package/@stytch/vanilla-js)
- [Stytch NextJS](https://www.npmjs.com/package/@stytch/nextjs)
- [Stytch's node client library](https://www.npmjs.com/package/stytch)
