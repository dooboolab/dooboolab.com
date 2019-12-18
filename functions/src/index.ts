import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const joinSlack = functions.https.onRequest((_, response) => {
  response.redirect(
    'https://join.slack.com/t/dooboolab/shared_invite/enQtNTAwODgxNDExNTg2LTkzNTA3ZmJmZDM4YzQ3ZWEyNTI3MjdkZjJmYjNhNjlmY2UzYjMzZTJjMjVkMmIzM2M1Y2QyZjlkN2NkZjhmZWE',
  );
});

export const joinRNSeoul = functions.https.onRequest((_, response) => {
  response.redirect(
    'https://join.slack.com/t/reactnativeseoul/shared_invite/enQtMjY4ODI2OTgzNzE0LWU4MWUzNjBkMDE4YTBjNjBmNmVhNjIwOWQzZmQxMTRjZGVhMzA2YWZhNWQ1ZWQ5MGJkODhlNGRlYmQzNzkzOWQ',
  );
});
