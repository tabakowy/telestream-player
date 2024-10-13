# Telestream Front-End Developer Take-Home Project

Welcome! This is the Teletream Take-Home Project used to establish skill level for front-end developers.

In essence we are asking you to implement a basic video preview application. Keep
in mind that we do not expect you to write the next YouTube.

## Requirements

1. The app must run without errors
2. The app must have the following views:
       1. A listing of video clips
       2. A video player for previewing one of those clips
3. The layout should work well on a desktop screen, but does not need to be responsive
4. The views must include a header with the name of your app
5. The app should be implemented using React

### Listing View

The listing preview should show the following:

- A list of all the clips at the `localhost:4000/api/clips` endpoint using a card
  for each clip that contains:
      - The thumbnail
      - The name
      - The date at which clip was created
      - A hover state to indicate the entry is clickable
- A toolbar that lets a user sort the list of clips by name or created date

When a card in the list is clicked, the client should navigate to the preview view:

### Preview View

The preview view should show the following:

- The name of the clip
- The video of the clip using a standard HTML `<video />` element.
- A scrub bar (AKA seek bar) that:
    - Has a progress indicator that a user can click and drag to seek to any point in the clip
    - Shows the total amount of video that has been buffered
- A toolbar that has the following controls:
    - Play / Pause
    - Jump back 10 seconds
    - Jump forward 10 seconds
    - Toggle Mute On or Off

Note: You have to implement your own video controls, you can't rely on the controls
of the native html video player!

## Evaluation Criteria

1. A well-designed look and feel
2. Clean and professionally structured code
3. Quality of documentation
4. Automated testing
5. Keyboard shortcuts for the video view

You are free to go over and above the functionality designed if you wish.
