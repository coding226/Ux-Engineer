# UX Engineering Practical - Part 3: fix UX problems

In previous practicals you leanrt a bit about identifying UX problems. In class you have been practicing your UX Engineering skills using client-side web development technologies. In this practical part, you will put the two together by identifying and then fixing the UX problems of an existing programme.

## The existing application

This application is designed to manage the employment history of the team members in the list. 

The user wants to do two things:
- promote an employee to a new role (they can only hold one role at a time)
- dismiss an employee entirely (and record the date of dismissal)

See if you can achieve both of these things (note - this is a reverse-engineered version of a real existing interface that people have been trying to use!).

## The programme

This is a simplified version of the programme so it is designed only to run in the front end with no server. It uses Astro (not very well) for code modularity. The data is presented as JSON which is then stored in local storage to temporarily imitate data persistence for the sake of this practical task.

### Local development instructions

To run the programme, use `npm start` and visit `localhost:3000`.

**Important:** if you change the way the code is served, make sure to leave instructions for how to run it. Probably best not to change it.

## Your instructions

Fix **all** the UX problems! 

The user needs to be able to:
- promote a person to a new role (they are only allowed one role at a time)
- dismiss (delete) a person from the team (and record the date of dismissal in the dataset)

You are to alter the code so that the above two tasks are easy to achieve according to the UX principles and heuristics you know. Don't introduce any new UX problems in the process!

**Bonus task:** if you found it simple to achieve the above, alter the code so that a person can hold more than one role at once.


## Handing in

**Commit to the main branch regularly** so that your development process is clear from the commit history. Submission will be a code freeze at the due time.


# Welcome to [Astro](https://astro.build)

This is the README that comes with Astro (I'm leaving it here in case you need it)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Tour.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
|:----------------|:--------------------------------------------|
| `npm install`   | Installs dependencies                       |
| `npm start`     | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/snowpackjs/astro) or jump into our [Discord server](https://astro.build/chat).
