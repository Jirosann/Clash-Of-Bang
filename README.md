# Clash of BaNG

A fan-community website for a fictional dark-fantasy strategy game, built with plain HTML, CSS and JavaScript. No frameworks, no build step.

This was an individual assignment for a web programming course at BINUS University. I wrote the pages, styling and scripts myself; the brief was to build a multi-page site without Bootstrap or other UI libraries.

## What's in it

| Page | File | Content |
| :--- | :--- | :--- |
| Home | `index.html` | Hero banner, a three-slide news carousel, three feature highlights, and three featured troop cards |
| Gallery | `pages/gallery.html` | Grid of six illustrated cards with short lore captions |
| Troops | `pages/troops.html` | Six troop cards; hovering a card reveals Hitpoints, DPS and Damage Type |
| About | `pages/about.html` | Community history timeline and a builder profile |
| Register | `pages/register.html` | Membership form with client-side validation |

## How it works

**Carousel** (`js/script.js`): slides are moved with `transform: translateX()` using the measured slide width. It loops in both directions, and a `resize` listener recalculates the offset so slides stay aligned when the window changes size.

**Form validation** (`js/script.js`): runs on submit with `preventDefault()`, then checks each field and writes messages into the matching `.error-message` element.

- Name: required, at least 3 characters
- Email: required; checks for an `@` with text before it and a `.` after it, using `indexOf` instead of a regular expression
- Gender: one radio option must be selected
- Age: a number from 13 to 99
- Favorite troop: a selection is required
- Reason to join: at least 15 characters

When everything passes, an alert confirms the registration and the form resets. Nothing is sent anywhere; this is a front-end exercise.

**Styling** (`css/style.css`): theme colors and shadows are CSS custom properties. The layout uses grid, with one breakpoint at 767px that stacks columns and the header on small screens.

## Run it locally

No install needed. Clone the repository and open `index.html` in a browser, or serve the folder with any static server (for example the VS Code Live Server extension).

## Known gaps

- `pages/about.html` points to a profile photo that is not in the repository, so that image does not load.
- Only one responsive breakpoint (max-width 767px); tablet widths use the desktop layout.
- Registration is not connected to a backend.

## Credits

Troop and scene images come from Unsplash, Pexels and Pixabay (one Pixabay image is AI-generated). Sources:

- Unsplash: [miniature soldiers](https://unsplash.com/photos/miniature-soldiers-march-past-a-stone-fort-Jxt9QumG1mo), [man with sword](https://unsplash.com/photos/a-man-with-a-sword-and-a-beard-mH0cdRaqY90), [archer statue](https://unsplash.com/photos/man-holding-archer-statue-Bc5LK1XqbCc), [dragon on building](https://unsplash.com/photos/shallow-focus-photo-of-dragon-on-gray-building-F6920BvzrZE), [riverbank buildings](https://unsplash.com/photos/ancient-buildings-and-temples-line-a-riverbank-with-boats-Ec9CPo6bL4E), [person holding candle](https://unsplash.com/photos/person-holding-white-pillar-candle-AvqFUEoo_eg)
- Pexels: [man in armor](https://www.pexels.com/photo/man-in-armor-and-with-sword-19249701/), [photo 35982173](https://www.pexels.com/id-id/foto/35982173/)
- Pixabay: [golem](https://pixabay.com/id/images/search/golem/), [goblin](https://pixabay.com/id/illustrations/ai-dihasilkan-goblin-makhluk-8887758/)

Clash of BaNG is a fictional fan project and is not affiliated with any game publisher.
