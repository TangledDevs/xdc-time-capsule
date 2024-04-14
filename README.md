# Time Capsule Frontend

The Time Capsule Frontend is a React-based web application that interacts with the Time Capsule Smart Contract deployed on the XDC blockchain.

## Project Structure

The frontend project is structured with a combination of pages, components, and contexts to create a seamless user experience. Below is a brief description of the primary files and folders:

- **pages**: Contains the main pages of the application (`Home`, `Capsules`, `Review`).
- **components**: Reusable UI components such as `Navbar`, `Footer`, and custom UI elements.
- **contexts**: Global state management using React Context API (`Context`).

## Installation and Setup

### Prerequisites

- Node.js
- npm or yarn
- MetaMask or compatible Ethereum wallet

### Steps to Run the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/TangledDevs/xdc-time-capsule
   cd xdc-time-capsule
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm run dev
   ```

   This will start the development server. Open [http://localhost:5173](http://localhost:5173) to view the application in the browser.

## Features

- **Connect Wallet**: Connect to MetaMask or other compatible Ethereum wallets to interact with the smart contract.
- **Home Page**: Overview and introduction to the Time Capsule application.
- **Capsules Page**: View and manage created time capsules.
- **Review Page**: Review and finalize time capsules before creating them on the blockchain.

## Smart Contract Interaction

The frontend interacts with the Time Capsule Smart Contract deployed on the Ethereum blockchain using ethers.js. The `Web3Connection` component handles the connection to the Ethereum wallet and sets up the contract instance for interaction.
