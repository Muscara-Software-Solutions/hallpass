# Hallpass
Hallpass is a modern HMS developed and maintained by [Muscara Software Solutions](https://muscarasoftware.com).

# Getting Started
Follow the steps below to setup Hallpass for development use.

## Requirements
* A server with Node.js version 12 or newer.
* A MySQL database.
* A Google project with OAuth Credentials

## Get the source code and install packages
```shell
git clone https://github.com/Muscara-Software-Solutions/hallpass.git
cd hallpass
npm install
```

## Configure Hallpass
Create an `.env` file with the following options

```env
DATABASE_URL=mysql://user:password@host:port/db
HOST=0.0.0.0
PORT=80
CLIENT_ID=your_google_client_id.apps.googleusercontent.com
CLIENT_SECRET=your_google_client_secret
REDIRECT_URIS=["http://localhost/auth/callback", "https://domain.com/auth/callback"]
SESSION_SECRET=session_secret
```

## Build the application
The build step will create required tables in your database if you are installing for the first time.

```shell
npm run dev:build
```

## Start the application
By default, this will launch the application on `http://0.0.0.0:80`. You can change this configuration in the `.env` file.

```shell
npm run dev:start
```

# License
Copyright (c) 2023 Muscara Software Solutions, LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
