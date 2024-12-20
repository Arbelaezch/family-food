# Arbelaez Family Recipes

A private recipe collection web application that enables the Arbelaez family to preserve and access their cherished recipes from anywhere. Built with Next.js and Django, this project provides a seamless experience for both contributing and viewing family recipes.

## Project Overview

This repository contains the frontend applications for the Arbelaez Family Recipes project:

- **Web Application**: A Next.js-based frontend deployed on Vercel
- **Mobile Application**: A planned React Native implementation (coming soon)

The project integrates with an existing Django backend (hosted at [Personal-Website](https://github.com/Arbelaezch/Personal-Website)) through Django REST Framework, optimizing resource usage and maintenance by leveraging existing infrastructure.

## Live Demo

Visit the web application at [https://family-food.vercel.app/](https://family-food.vercel.app/)

## Key Features

- Secure family-only recipe contribution through Django admin integration
- Responsive web interface for easy recipe viewing
- Permanent recipe storage and accessibility
- Streamlined recipe management experience
- Cross-platform compatibility (web + future mobile app)

## Technical Architecture

### Frontend (This Repository)

- **Web**: Next.js application with modern UI/UX
- **Mobile**: Planned React Native implementation
- Vercel deployment for optimal performance and reliability

### Backend Integration

- Utilizes Django REST Framework endpoints from the Personal-Website repository
- Integrated authentication with Django admin for family member access
- Optimized hosting efficiency through backend resource sharing

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/arbelaezch/family-food.git
cd family-food
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
FAMILY-FOOD/
├── apps/
│   ├── mobile/       # Future React Native application
│   └── web/          # Next.js web application
├── .gitignore
├── package.json
└── README.md
```

## Motivation

This project was initiated at the request of family members who needed a more reliable and user-friendly alternative to existing recipe sharing platforms. Key motivations include:

- Ensuring permanent preservation of family recipes
- Providing straightforward recipe access and management
- Creating a dedicated space for family culinary heritage
- Eliminating dependencies on third-party recipe platforms

## Future Plans

- Implementation of the React Native mobile application