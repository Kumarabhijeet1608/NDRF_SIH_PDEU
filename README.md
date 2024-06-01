# Smart India Hackathon Project: NDRF Disaster Management Platform

## Project Overview

This project was developed for the Smart India Hackathon and focuses on creating a comprehensive website for NDRF officials. The platform aggregates live data on weather, temperature, and disaster-related information to enhance transparency for disaster relief fund donations.

### Key Features
- **Front-End Development**: Implemented using HTML, CSS, React, and three.js, with JavaScript Vite for optimized development.
- **Back-End Development**: Built with Node.js and Express.js, integrating Razorpay for secure payments.
- **Real-Time Reporting and Fake News Detection**: Utilized the Twitter API and NLP techniques to report real-time situations and detect fake news, with tweet locations mapped using Folium.
- **Blockchain Integration**: Employed blockchain technology for disaster management smart contracts, adhering to ERC-20 standards, using IPFS for scalable data storage, supported by Ethereum 2.0/Polygon.
- **Skills Demonstrated**: Web development, real-time data processing, secure transactions, and blockchain integration.

## Project Structure
- **Frontend**: Contains `src`, `public`, and `index.html`.
- **Backend**: Includes `db.sqlite3`, `Pipfile`, `json database`, `map.html`, Razorpay integration, and smart contracts (`disaster.sol`, `incidents.sol`, `supplychain.sol`, `user.sol`).
- **Donations**: Contains smart contracts (`bank.sol`, `safemath.sol`).

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)
- Python
- Solidity Compiler
- SQLite3
- Razorpay API Key
- Twitter API Credentials

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/ndrf-disaster-management.git
    cd ndrf-disaster-management
    ```

2. **Install Frontend Dependencies**
    ```bash
    cd frontend
    npm install
    ```

3. **Install Backend Dependencies**
    ```bash
    cd ../backend
    npm install
    ```

4. **Setup Python Environment**
    ```bash
    pipenv install
    pipenv shell
    ```

5. **Compile Smart Contracts**
    Use the Solidity compiler to compile the smart contracts in the `contracts` directory.

### Running the Application

1. **Start the Backend Server**
    ```bash
    cd backend
    npm start
    ```

2. **Start the Frontend Server**
    ```bash
    cd ../frontend
    npm run dev
    ```

3. **Access the Application**
    Open your browser and navigate to `http://localhost:3000`

## How NLP and Folium Integration Works

### NLP for Real-Time Situation Reporting and Fake News Detection

- **Twitter API**: Fetches real-time tweets related to disasters.
- **NLP Techniques**: Processes tweets to identify relevant information and detect fake news. This involves text preprocessing, sentiment analysis, and keyword extraction.
- **Integration**: The processed data is then sent to the backend for further analysis and visualization.

### Folium for Mapping Tweet Locations

- **Location Mapping**: Extracted location data from tweets is used to plot points on an interactive map.
- **Folium Library**: Utilized to create and customize maps in Python, which are then embedded into the web application using `map.html`.
- **Real-Time Updates**: The map updates in real-time as new data is processed, providing a visual representation of disaster-affected areas.

## File Descriptions

### Frontend
- **src/**: Contains React components and application logic.
- **public/**: Public assets and static files.
- **index.html**: Main HTML file.

### Backend
- **db.sqlite3**: SQLite3 database file.
- **Pipfile**: Python dependencies file.
- **json database**: JSON formatted database for storing intermediary data.
- **map.html**: HTML file for embedding Folium maps.
- **Smart Contracts**:
  - **disaster.sol**: Smart contract for managing disaster data.
  - **incidents.sol**: Smart contract for recording incidents.
  - **supplychain.sol**: Smart contract for managing supply chain logistics.
  - **user.sol**: Smart contract for user management.

### Donations
- **Smart Contracts**:
  - **bank.sol**: Smart contract for managing donations.
  - **safemath.sol**: Library for secure mathematical operations in Solidity.

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request.

