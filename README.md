# QR Code Generator

A **dynamic QR Code generator** built with React, allowing users to create customizable QR codes in both **PNG and SVG formats**. Users can adjust colors, input various text or URL values, and download the QR code directly.

---

## Features

- **Real-time QR Code Generation**: Instantly updates QR code based on input text or URL.
- **Customizable Colors**: Allows color selection for personalized QR codes.
- **Downloadable Formats**: Supports downloads in **PNG** and **SVG**.
- **Responsive Design**: Optimized for both desktop and mobile use.

---

## Upcoming Features

Future updates will include enhancements for a more powerful and versatile QR code generation experience:

- **Dynamic Content Options**: Allow users to create QR codes that can encode large blocks of text or different types of information.
- **Logo at Center**: Option to upload and place a logo or image at the center of the QR code for branding.
- **Text Editor**: Integrate a text editor, making it easier to create QR codes that contain formatted text like restaurant menus or event details.
- **Size Adjustment**: Flexible size options for downloading QR codes in different resolutions.
- **Additional QR Code Formats**: Support for various content types like contact cards, event details, Wi-Fi information, and more.

---

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Libraries**: `react-qr-code` for QR code generation, `html2canvas` for PNG export, `downloadjs` for direct downloads
- **Deployment**: (Optional) [Deployment platform, e.g., Netlify or Vercel]

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
   cd qr-code-generator
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
4. Open the project in your browser at http://localhost:3000.
