# Kart Challenge

## Prerequisites

- Node.js v22
- npm v10

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mdraj2/oolio-kartchallenge
   cd oolio-kartchallenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building to AWS

Create a production build first using:

```bash
npm run build
```

Navigate to the infra folder and then refer to [AWS Deployment Guide](https://github.com/mdraj2/oolio-kartchallenge/blob/main/infra/README.md)

```bash
cd infra
```

## Project Structure

- `src/`: React source code
  - `components/`: Reusable React components
    - `Icons/`: React SVG icons
- `infra/`: Terraform source code

## Deployment

Ensure you're using the specified Node.js and npm versions:

- Node.js: v22
- npm: v10

## Available Scripts

- `npm run dev`: Start development server
- `npm run lint`: Run ESLint
- `npm run build`: Create a production build
