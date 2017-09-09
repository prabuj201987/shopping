// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDRYu_UsgjwYA4zs1MMMcQojoM53PwRs9M',
    authDomain: 'shopping-dev.firebaseapp.com',
    databaseURL: 'https://shopping-dev.firebaseio.com',
    projectId: 'shopping-dev',
    storageBucket: 'shopping-dev.appspot.com',
    messagingSenderId: '670793939288'
  }
};
