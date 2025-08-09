# V-Compass 🎯

## Basic Details
### Team Name: Darbi

### Team Members
- Team Lead: Binil Babu P - [Vidya Academy of Science and Technology]
- Member 2:  Darwin T D- [Vidya Academy of Science and Technology]

### Project Description
V-Compass is a playful web app that points a stylish compass toward passing planes overhead and alerts when one is nearby. It uses a FastAPI backend to fetch aircraft data from OpenSky and a React frontend to visualize direction and play audio cues for where to look.

### The Problem (that doesn't exist)
People outdoors keep craning their necks randomly, missing the grand airplane fly-by moment.

### The Solution (that nobody asked for)
A compass that literally points the way to the plane, beeps out the direction, and pops a notification when a flight is close enough to gawk at.

## Technical Details
### Technologies/Components Used
For Software:
- Languages used
  - Python (FastAPI backend)
  - JavaScript (React frontend)
- Frameworks used
  - FastAPI (backend REST API)
  - React (frontend UI)
  - Tailwind CSS (utility-first styling via classNames)
- Libraries used
  - requests (HTTP client for Python)
  - fastapi, starlette, CORSMiddleware (web framework and CORS)
  - Browser Geolocation API, Notifications API (frontend)
- Tools used
  - Node.js + npm (frontend dev server/build)
  - uvicorn (run FastAPI)
  - Vite or CRA (frontend tooling)

For Hardware:
- None

### Implementation
For Software:

# Installation
Backend (FastAPI):
- Create and activate a virtual environment
  - python -m venv .venv
  - source .venv/bin/activate  (Windows: .venv\Scripts\activate)
- Install dependencies
  - pip install fastapi uvicorn requests
- Save the backend file as main.py with the provided code.

Frontend (React with Vite):
- Create a React project
  - npm create vite@latest v-compass-frontend -- --template react
  - cd v-compass-frontend
  - npm install
- Optional: Add Tailwind CSS (to match provided classes)
  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p
  - Configure tailwind.config.js content paths to src/**/* and include Tailwind directives in src/index.css
- Replace src/App.jsx with the provided app.jsx code.

# Run
Backend:
- uvicorn main:app --reload --host 0.0.0.0 --port 8000

Frontend:
- npm run dev  (Vite defaults to http://localhost:5173)

CORS:
- Backend allows http://localhost, http://localhost:3000, http://localhost:5173
- Ensure the frontend runs on one of these origins.

### Project Documentation
For Software:

# Screenshots (Add at least 3)
![Screenshot1](Add screenshot 1 here with proper name)
*Home screen showing V-Compass title, status text, and the compass UI.*

![Screenshot2](Add screenshot 2 here with proper name)
*Tracking active: compass needle oriented toward a detected plane.*

![Screenshot3](Add screenshot 3 here with proper name)
*Plane notification card showing callsign, altitude, speed, and the “Tell Me Where to Look” button.*

# Diagrams
![Workflow](Add your workflow/architecture diagram here)
*Flow: Browser gets geolocation → Frontend requests /api/planes → FastAPI fetches OpenSky states → Frontend filters by distance/altitude → Compass + notification update → Optional audio cue playback.*

For Hardware:
- Not applicable

# Schematic & Circuit
![Circuit](Add your circuit diagram here)
*Not applicable.*

![Schematic](Add your schematic diagram here)
*Not applicable.*

# Build Photos
![Components](Add photo of your components here)
*Not applicable.*

![Build](Add photos of build process here)
*Not applicable.*

![Final](Add photo of final product here)
*Not applicable.*

### Project Demo
# Video
[Add your demo video link here]
*Shows starting tracking, granting location/notification permissions, compass rotation when planes are nearby, and the alert card popup with audio directions.*

# Additional Demos
- Optional: Short clip demonstrating direction audio sequence for different bearings.
- Optional: Demo comparing mock mode vs. live data mode.

## Team Contributions
- Darwin T D: Backend FastAPI endpoint design, OpenSky integration, API error handling, CORS configuration.
- Binil Babu P: React frontend UI/UX, compass visualization, geolocation/notifications
