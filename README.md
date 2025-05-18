
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