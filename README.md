# giedrius.io

> Portfolio web app built with the MERN stack.

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

In ./config folder you need to create keys_dev.js file that looks like this:

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secret: 'YOUR_OWN_SECRET'
};
```

For full functionality you need to add your own cloudinary.com credentials in keys_dev.js

```
module.exports = {
    mongoURI: 'YOUR_OWN_MONGO_URI'',
    secret: 'YOUR_OWN_SECRET',
    cloudName: 'YOUR_OWN_CLOUD_NAME',
    cloudApiKey: 'YOUR_OWN_CLOUD_API_KEY',
    cloudApiSecret: 'YOUR_OWN_CLOUD_API_SECRET'
};
```

## App Info

### Author

Giedrius Blažulionis
[giedrius.io](http://www.giedrius.io)

### Version

1.0.0

### License

This project is licensed under the MIT License
