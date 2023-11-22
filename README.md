# QR Code Generator using Node.js

This Node.js application allows users to generate QR codes for a given URL. The application uses the `inquirer`, `qr-image`, and `fs` npm packages for obtaining user input, generating QR codes, and saving user input to a file, respectively.

## Prerequisites

Before running the application, make sure you have Node.js installed on your machine. You can download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the required npm packages:

   ```bash
   npm install
   ```

## Running the Application

To run the QR code generator, follow these steps:

1. Open a terminal window.

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Run the application:

   ```bash
   node index.js
   ```

4. The application will prompt you to enter a URL. Type in the desired URL and press Enter.

5. The application will generate a QR code image (saved as `qr_img.png`) and create a text file (`url.txt`) containing the entered URL.

6. Check the project directory for the generated QR code image (`qr_img.png`) and the text file (`url.txt`).

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): For interactive command-line user interfaces.
- [qr-image](https://www.npmjs.com/package/qr-image): For generating QR code images.
- [fs](https://nodejs.org/api/fs.html): Node.js native module for interacting with the file system.

## Notes

- Make sure to provide a valid URL when prompted.
- Generated QR code image will be saved as `qr_img.png`.
- Entered URL will be saved in the `url.txt` file.
