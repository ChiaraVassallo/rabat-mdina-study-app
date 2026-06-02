# Editing the Study App

## Photos

Put photos inside the matching folder:

```text
media/
  wignacourt/
  catacombs/
  domus-romana/
  streets-mdina/
  cathedral-mdina/
```

Name them by stop number and image order:

```text
1.1.jpg
1.2.jpg
2.1.jpg
6.1.jpg
6.2.jpg
```

The app uses `media-data.js` as the current photo index, so if photos are added in bulk I can refresh that file for you.

## Notes

Edit short structured notes in the matching summary file:

```text
catacombs-summaries.js
wignacourt-summaries.js
```

Domus summaries are still inside `app.js`, inside `stopNotes`.

Each stop can have:

```js
notice: "What the guide should notice or point out visually.",
background: "Historical background and explanation.",
script: "Suggested spoken guide version.",
exam: "Dates, names, comparisons and must-remember facts."
```

Stop numbers are zero-based in the code:

```js
0 = stop 1
1 = stop 2
2 = stop 3
```

Full Domus notes extracted from the Word document are in `domus-data.js`.
Full Catacombs notes extracted from the Word document are in `catacombs-data.js`.
Full Wignacourt notes extracted from the Word document are in `wignacourt-data.js`.
