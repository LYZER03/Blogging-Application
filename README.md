<div style="text-align: justify">
 
# Blogging application - ECE Webtech project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![Blog App](https://i.ibb.co/VxMMqnn/Blogging-Application.png)

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

##  Project Setup Guide

### Environment Variables Setup

- **App Folder**: Define `env.local` in the `project root/app` folder.
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_VERCEL_URL=
```
- **Project Root**: Set up `.env` at the root of the project.
```
SUPABASE_AUTH_EXTERNAL_GITHUB_CLIENT_ID=
SUPABASE_AUTH_EXTERNAL_GITHUB_SECRET=
```

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

## Deliverables 

- Vercel URL: [https://ece-webtech-2023-fall-gr02-10.vercel.app/]
- Supabase project URL: [https://supabase.com/dashboard/project/weuylrycnjjrpmyljfnu]

## Authors

- Alex DONG group 02-10
- Dylan NUNEZ group 02-10
- Narcis GEORGE group 02-10 

## Evaluation

### Mandatory Tasks


* **Naming convention**
  * Grade: 2 points
  * Comments: We name variables following the CamelCase convention and provide them with meaningful names to help us remember their purpose and utility
  * Task feedback: The task wasn't very difficult; we just had to be mindful of adhering to the CamelCase rule and assigning purpose to the variables we used.
* **Project structure**
  * Grade: 2 points
  * Comments: For this project, we utilized the app router paradigm in Next.js to leverage the latest Next.js features. Components were organized into their respective folders, and pages were generated based on these folders.
  * Task feedback: The task wasn't difficult, we followed the documentation to guide us on how to create folders and files according to the app router.
* **Git usage**
  * Grade: 2 points
  * Comments: We used Conventional Commit when assigning titles to our commits.
  * Task feedback: No, it wasn't difficult. Through what we learned in class and the online documentation, we were able to apply Conventional Commit.
* **Code quality**
  * Grade: 4 points
  * Comments: In this task, we maintained proper indentation and syntax when declaring functions. We created a context provider to pass information to components, and we developed components that could be reused throughout the app.
  * Task feedback: This task was a bit challenging because as we progressed, we realized that we could refactor the code, and we made subsequent modifications.
* **Design, UX, and content**
  * Grade: 3 points
  * Comments: For this task, we utilized the website provided by the instructors to implement the placement of components on the website. Regarding the components, for buttons in particular, we aimed to maintain consistency in the component format (size, font, color).
  * Task feedback: It was somewhat challenging because it required maintaining consistency across different parts of the page in terms of styles.

* **Home page**
  * Grade: 2 points
  * Comments: We created a main page that displays a banner with a call to action button, leading users to view the articles.
  * Task feedback: It was somewhat challenging because it required maintaining consistency across different parts of the page in terms of styles.
* **Navigation**
  * Grade: 2 points
  * Comments: We implemented a navigation bar that includes the main pages of interest on the website, along with the account icon.
  * Task feedback: Initially, it was challenging, but then we decided to implement the navigation bar as a component, as explained in class, and it became easier.
* **Login and profile page**
  * Grade: 4 points
  * Comments: We implemented an authentication system with GitHub, and we also provided the option for email login. The username information appears in the header after logging in. If the username is empty, the user's email is displayed instead.
  * Task feedback: Completing this task was quite challenging, and the support from the classes was essential to accomplish it. The teacher explained the basic steps for integrating GitHub authentication with Supabase.
* **Post creation and display**
  * Grade: 4 points
  * Comments: We enabled post creation on the articles page. A button to create posts is displayed, and it's visible to authenticated users. Posts can be created with the following fields: Title, content, category, and image.
  * Task feedback: The task had a moderate level of difficulty as it required synchronizing post creation with a database table to store articles. Additionally, creating a bucket to store post images added complexity to the task.
* **Comment creation and display**
  * Grade: 0 points
  * Comments: The task could not be completed.
  * Task feedback: Comments were supposed to be linked to the created post articles.
* **Post modification and removal**
  * Grade: 4 points
  * Comments: We added a check to see if the logged-in user is the author of the displayed article. Based on this check, we conditionally showed buttons for deleting and editing the article. The delete functionality uses Supabase to delete the article upon user confirmation. The edit functionality redirects the user to an article editing page with the article ID in the URL.
  * Task feedback: The task was clear and relevant, involving common actions in article management. It required knowledge of React, Next.js, and Supabase integration, making it moderately challenging. Overall, it provided a practical exercise for improving skills in building interactive web applications
* **Search**
  * Grade: 2 points
  * Comments: The search bar was visually created, but it does not incorporate the functionality to search for articles.
  * Task feedback: We should research how to incorporate the functionality for searching articles
* **Use an external API**
  * Grade: 0 points
  * Comments: External APIs were not called.
  * Task feedback: The task was not completed.
* **Resource access control**
  * Grade: 3 points
  * Comments: Through triggers, we were able to synchronize user creation with a table called "profile," where user information is managed. These triggers also synchronize user updates and deletions between both tables. Users only have access to their own profile information.
  * Task feedback: The task had a moderate level of difficulty, as we needed to consult documentation to implement the aforementioned triggers.
* **Account settings**
  * Grade: 4 points
  * Comments: The user has the ability to edit their account information on their profile page.
  * Task feedback: The implementation of the "profiles" table was necessary to store user information, which is then updated on the profile page.
* **WYSIWYG integration**
  * Grade: 0 points
  * Comments: The task could not be completed.
  * Task feedback: We should research how to implement the WYSIWYG (What You See Is What You Get) editor because this was not mentioned in previous classes.
* **Gravatar integration**
  * Grade: 0 points
  * Comments: The task could not be completed.
  * Task feedback: We should research how to implement Gravatar.
* **Light/dark mode**
  * Grade: 2 points
  * Comments: A theme provider was implemented in the layout, and libraries for sun and moon were imported, which provide the styles for the website's theme.
  * Task feedback: The task required research for development, and we also had to conduct a website review to ensure that the theme was being applied to all components.

## Miscellaneous

### Course Feedback

In general, we believe the classes provide a highly practical introduction to application development. The course content is sequential, which facilitates our learning progress as students. What we enjoyed the most was the integration of Supabase with Next.js, as this platform simplifies the management of various processes when creating a complete web page, such as authentication, user creation, and image storage.

We believe it's important for students to have a minimum level of web programming knowledge in HTML, CSS, and JS before taking this course. Some topics, like Tailwind, React.js, or web page rendering, are covered more superficially, and individuals without prior knowledge might feel overwhelmed trying to keep up with the class pace.

</div>
