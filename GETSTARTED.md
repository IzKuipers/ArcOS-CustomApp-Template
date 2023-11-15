# Getting started

This guide will explain how you can create a Sideloaded Application for ArcOS. This currently only works on the [Beta site](https://beta.izk-arcos.nl/) of ArcOS or on the latest GitHub pull.

> [!WARNING]
> This is currently still highly experimental and manual. A more refined system may arrive in the future.

## What you'll need

- A compatible ArcOS instance opened and logged in
- A KebabCase-formatted app ID you will use in the app (example: `my-awesome-app`)
- An icon to use as app icon (SVG is preferred)
- [NodeJS](https://nodejs.org), [Git](https://git-scm.com/) and [Yarn](https://yarnpkg.com/) installed (latest versions)

## Cloning and initial test

- First, clone the repository to a folder on your device:

  ```
  $ git clone https://github.com/IzKuipers/ArcOS-CustomApp-Template
  ```

- `cd` into this directory and satisfy the dependencies:

  ```
  $ cd ArcOS-CustomApp-Template
  $ yarn
  ```

- Next you'll want to build the base template to know if building works;

  ```
  $ yarn build
  ```

  Two files, `app.js` and `app.base64`, should be located in `dist/`. The `app.base64` file should contain a massive amount of Base64 characters that starts with `data:text/javascript;base64,`.

## Setting up

Now it's time for some setup.

1. Goto `src/App.svelte` and change the `tag` property at the top of the file to the app ID you thought of earlier. **Don't modify anything else in this file**.
2. Goto `src/arcos.config.ts` and put the same app ID in the `APP_ELEMENT_TAG` variable.
3. In `src/arcos.config.ts`, change the properties of your application in the `APP` object. Don't modify the `sideloaded` property, leave it set to `true`.
4. Paste your app icon in `src/assets` as `logo.svg` or similar. Remember the filename.
5. Now go back to `src/arcos.config.ts` and change the `AppIcon` import at the top of the file to `./assets/FILENAME` where `FILENAME` is the name of your image. You can now delete `src/assets/svelte.svg` since it's no longer used.
6. **Build your application.** Assets, components, everything.

## Building an `appmod` file

1. In the root of your project, run `yarn build` to compile the data-URL of your application.
2. The data-URL is located in `dist/app.base64`. Copy the contents of this file.
3. In ArcOS, open your File Manager and create a new file ending in `.appmod`. The name is not important.
4. Write the following contents in this file:
   ```json
   {
     "tag": "APP_TAG_HERE",
     "module": "DATA_URL_HERE"
   }
   ```
   where `APP_TAG_HERE` is the app ID you thought of earlier and `DATA_URL_HERE` is the base64 you copied in the previous step.
5. Save this file and run it.
6. It may appear that nothing has happened, but the app should have appeared in your start menu.

## Troubleshooting

### There's no app after I run the file

- In the File Manager, select the `appmod` file and click the "Open With" button on the right of the selection. Select Text Editor from the list.
- Verify that there are no typos in the `appmod` file (check step 4 above), save it and run it again.
- Verify that the App ID is the same everywhere:
  - Check the `appmod` file
  - Check `src/arcos.config.ts` --> `APP_ELEMENT_TAG`
  - Check `src/App.svelte` --> `svelte:options` --> `customElement` --> `tag`
- If that doesn't work, copy the contents of the `appmod` file and create an issue on this repository with the file contents in a codeblock. I'll look over it and see what is wrong.

# IMPORTANT

- You can only use `gif`, `png`, `jpg` or `svg` assets at the current time.
- **Don't use external CSS files**. These will be ignored. Use `<style scoped>` tags in Svelte files at all times.
- It's preferred to use TS for the app using `<script lang="ts">`, though regular JS does work.
