# Been

A React Native mobile application for storing and sharing the places you've been to create your personal travel map.

## Overview

**Been** helps you keep track of all the amazing places you've visited. Pin locations on an interactive map, add photos, and build a visual diary of your travels. Share your favorite spots with friends and discover where others have been.

## Features

### Current Features
- **Interactive Maps**: Browse and pin locations using `react-native-maps`
- **Personal Travel Diary**: Store all the places you've visited
- **Photo Attachments**: Add photos to your pinned locations
- **Secure Authentication**: User authentication powered by Firebase Auth
- **Cloud Storage**: All your places and photos safely stored in Firebase Firestore and Storage

### Coming Soon
- **Social Sharing**: Share your pinned places and photos with other users
- **Friend Connections**: Connect with friends and explore their travel maps
- **Collaborative Collections**: Create and share collections of places with groups

## Technology Stack

- **React Native** with **Expo** for cross-platform mobile development
- **TypeScript** for type-safe code
- **react-native-maps** for interactive map functionality
- **Firebase** ecosystem:
  - Firebase Authentication
  - Cloud Firestore (database)
  - Firebase Storage (photos)
- **MobX State Tree** for state management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- iOS Simulator (macOS) or Android Studio

- Follow **.env.example** to add your **Google Maps keys** (need to be generated from Google Cloude account)
- **google-services.json** and **GoogleService-Info.plist** need to be added to the root folder (need to be generated from Firebase console)

### Installation

\`\`\`bash
# Install dependencies
yarn install

# Start the development server
yarn start
\`\`\`

### Building for Devices

\`\`\`bash
# Build for iOS simulator
yarn build:ios:sim

# Build for iOS device
yarn build:ios:device