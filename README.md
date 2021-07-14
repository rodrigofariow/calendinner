### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Configure local Postgresql DB

https://redwoodjs.com/docs/local-postgres-setup#local-postgres-setup

After following the instructions on redwood docs, your ```.env``` should look something like:

```
# THIS FILE SHOULD NOT BE CHECKED INTO YOUR VERSION CONTROL SYSTEM
#
# Environment variables set here will override those in .env.defaults.
# Any environment variables you need in production you will need to setup with
# your hosting provider. For example in Netlify you can add environment
# variables in Settings > Build & Deploy > environment
#
DATABASE_URL="postgresql://rodrigofaria@localhost:5432/rodrigofaria?connection_limit=1"
TEST_DATABASE_URL="postgresql://rodrigofaria@localhost:5432/rodrigofaria?connection_limit=1"
```


### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`. 
