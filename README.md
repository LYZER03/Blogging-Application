# ECE WEBTech 2023 fall LAB

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Installation

install application:
```
npm install
```

## Info for developers (Later this info will be removed)

Apply npm run dev inside app folder, to start next js developer environment

In supabase folder, apply this command to start supabase environment :
```
docker compose -f ./docker-compose.yml -f ./dev/docker-compose.dev.yml up
```

Then , enter this credential test :
- **`Username`**: supabase
- **`Password`**: this_password_is_insecure_and_should_be_updated

Access to supabase studio, with this route : **`http://localhost:8000/`**

Follow ,step 4 for this page to set github oauth : **https://github.com/adaltas/ece-webtech-2023-fall/blob/master/modules/09.oauth/lab.md**

Inside .env file in supabase folder , fill this data:

- GOTRUE_EXTERNAL_GITHUB_CLIENT_ID
- GOTRUE_EXTERNAL_GITHUB_SECRET
- GOTRUE_EXTERNAL_GITHUB_ENABLED
- GOTRUE_EXTERNAL_GITHUB_REDIRECT_URI

### Authors

**`Student GROUPE 02-10`** 
Alex DONG - Dylan NUNEZ - Narcis Georges

**`Tutor`**
Sergei KUDINOV
