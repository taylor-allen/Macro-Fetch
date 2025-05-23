
# Macro-Fetch

A minimal Next.js web app where users enter food ingredients, and the app returns the three least calorie-dense foods with basic nutrition info. It uses a public food API (FatSecret), and stores past searches in a local file. Built with React and a Node.js server.


## Features/Usage

- On the home page, search any ingredient by name using the simple search form. Simply type a food name and press Enter or click the Search button.
- You'll be taken to the Results page which displays the three lowest calorie results. 

## Tech Stack

**Client:** 
- Next.js App Router
- TailwindCSS
- Fetch API
- React Hooks

**Server:** 
- Next.js API Routes `(src/app/api/food/route.js)`
- Node.js Fetch for OAuth2 token & FatSecret `foods.search` calls.


## Prerequisites

1. Create a basic account at https://platform.fatsecret.com/api-editions because you will need to obtain the following:

- Client ID
- Client Secret

You will also need to whitelist your IP address in your account settings in order to make requests to this API. 

2. Install dependencies with npm.

```bash
  npm install 
```
    
3. Create .env file at the project root and add:
```ini
FATSECRET_CLIENT_ID=your_client_id
FATSECRET_CLIENT_SECRET=your_client_secret
```

4. Start the dev server.
```bash
  npm run dev
```
## Authors

- [@taylor-allen](https://www.github.com/taylor-allen)


## Contributing

Contributions are always welcome!
