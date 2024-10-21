# Just a Text Editor

## Description

This project is a Progressive Web Application (PWA) designed to function as a text editor, enabling users to create and edit notes or code snippets both online and offline. The application ensures data persistence through IndexedDB, and users can also install it as a desktop app for quick access.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation

To install and run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install all dependencies.
4. Run `npm run start` to launch the development server.
5. Open your browser and navigate to `http://localhost:3000` to start using the application.

To install the application as a desktop app:

1. Open the application in your web browser.
2. Click on the "Install" button in the address bar or within the app interface.
3. Follow the installation prompts to add it to your desktop.

## Usage

- Open the text editor either in your browser or the installed desktop version.
- Begin typing or pasting your text or code snippets into the editor.
- Your content will automatically be saved to IndexedDB in real-time.
- You can close and reopen the application, and your saved content will be restored.
- You can access the live deployed version of J.A.T.E to test its functionality.

## Features

- Create and edit text content or code snippets.
- Automatic saving using IndexedDB.
- Offline access and functionality.
- Ability to install the app as a desktop PWA.
- Optional syntax highlighting (if implemented).

## Technologies Used

- HTML/CSS/JavaScript
- IndexedDB for local storage
- Webpack for bundling JavaScript files
- Workbox for service worker and PWA integration
- Babel for ES6+ compatibility
- Node.js and Express.js for backend support

## Screenshots

[J.A.T.E](./Assets/Screenshot%202024-10-21%20at%2012.07.39 PM.png)

## Contributing

Contributions are always welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Questions

If you have any questions or need further assistance, feel free to reach out or open an issue.

