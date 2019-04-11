# ReactNative-MobileFlashcards

This project is an assessment project for Udacity's React Fundamentals course. The goal of this project is practice the fundamentals learning of React-Native as Navigation, Animation, AsyncStorage, React-Native components and Native APIs.

The following features should be implemented (to be accepted):
- Display 5 screens: 'List of Decks', 'Deck Specification', 'Create Deck', 'Quiz' and 'Create Card'
- User will use TabNavigation and StackNavigation to navigate through this screens
- Create Deck should add a new Deck to the list and open its 'Deck Specification' to allow user add new cards
- Quiz screen should display all cards from a deck, one by one, and User will exercise his memorize skill and inform App if He remembered the answer or not (two buttons: "correct" and "incorrect") and App will summerize results.
- Quiz should display results once User answered all cards from deck.
- App must notify user daily using Push Notification (React-Native API) to remember user to train.

In addition, this features was also implemented:
- App Icon and Splash Screen.
- FlatList has refresh option, to manually update once User create a new deck or add a new card.
- Using of Graph for result.
- Use of Animation in Results.
- Load Pre-Data on setup.

Desirable features (may not be implemented until assessment's deadline):
- Save user answers to track User improvements
- Update and Delete a card from deck.
- Delete a deck.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* export `REACT_NATIVE_PACKAGER_HOSTNAME` env variable informing your IP, if you have VirtualBox installed
* start the development server with `npm start`

## Project Structure

```bash
├── assets
│   ├── brain-cenit-view.ico # Push Notification Icon | Icons made by: Freepik, Licensed by: CC 3.0 BY
│   ├── preData.js           # List of Decks loaded on first setup
│   ├── splash2.png          # App Splash
│   └── Sketch001.png        # App Icon | Vector made by: rawpixel.com - br.freepik.com
├── components
│   ├── ProgressBar.js  # ProgressBar component used in Quiz screen
│   ├── QuestionCard.js # Card component used in Quiz screen
│   └── Results.js      # Results component used in Quiz screen
├── helpers
│   ├── colors.js       # File contains colors constants for Styling
│   ├── notification.js # Functions for Push Notification API
│   └── storage.js      # Functions for Storage - AsyncStorage
├── navigation
│   ├── AppNavigator.js     # Capsulate Navigation and return an 'AppContainer'
│   └── MainTabNavigator.js # StackNavigation and TabNavigation declarations
├── screens
│   ├── Deck.js     # Deck Specification screen, it has navigation for 'Quiz' and 'Create Card' screens
│   ├── DeckList.js # Deck List screen, it has navigation to 'Deck Specification' screen once a deck is selected
│   ├── NewCard.js  # New Card screen, it has navigation to 'Deck Specification' screen once a new card is created
│   ├── NewDeck.js  # New Deck screen, it has navigation to 'Deck Specification' screen once a new deck is created
│   └── Quiz.js     # Quiz screen, it has navigation to 'Quiz' (restart quiz) and 'Deck Specification' screens
├── App.js   # Main App component, contains AppNavigator and StatusBar
├── app.json # App Specifications for 'run' and 'deploy'
└── package.json # Project dependences
```

# Deploy

- You will need `exp` installed as global. `npm install -g exp`
- For Android: `exp build:android`
- For IOS: `exp build:ios`

# Tests

* This app was tested on Android only
