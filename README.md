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

### Environment Variables Setup

- **App Folder**: Define `env.local` in the `app` folder.
- **Project Root**: Set up `.env` at the root of the project.

Before you begin, ensure that Supabase CLI is installed on your computer. If it's not installed yet, please follow the instructions provided in the Supabase documentation. For Linux users, refer to this link:

[Getting Started with Supabase CLI](https://supabase.com/docs/guides/cli/getting-started?platform=linux)

## Setting Up the Local Environment

### Step 1: Start Supabase

Open your terminal and execute the following command to start the local Supabase environment:

```
supabase start
```

### Step 2: Apply Database Migrations


Next, set up your database schema by applying migrations. Run the following command:

```
supabase migration up
```

This will apply the necessary database migrations to configure your local database schema.

### Step 3: Configure Storage in Supabase Studio

Finally, you'll need to set up a storage bucket for article images:

1. Open Supabase Studio in your web browser by navigating to [http://localhost:54323/](http://localhost:54323/).
2. In Supabase Studio, go to the "Storage" section.
3. Create a new storage bucket named `article-images`.
4. Set the access level of this bucket to 'public' to allow public access to the images stored in it.


# Project Setup Guide

This README provides a step-by-step guide to set up your local environment using Supabase. Follow these instructions to get started.

## Prerequisites

Before you begin, ensure that Supabase CLI is installed on your computer. If it's not installed yet, please follow the instructions provided in the Supabase documentation. For Linux users, refer to this link:

[Getting Started with Supabase CLI](https://supabase.com/docs/guides/cli/getting-started?platform=linux)

## Setting Up the Local Environment

### Step 1: Start Supabase

Open your terminal and execute the following command to start the local Supabase environment:

```
supabase start
```

This command initializes the Supabase services required for your local development.


Step 2: Apply Database Migrations
Next, set up your database schema by applying migrations. Run the following command::

```
supabase start
```



### Authors

**`Student GROUPE 02-10`** 
Alex DONG - Dylan NUNEZ - Narcis GEORGE

**`Tutor`**
Sergei KUDINOV
