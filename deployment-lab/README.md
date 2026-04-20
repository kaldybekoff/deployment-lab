# Deployment Lab

This project contains two very simple apps for deployment practice.
The first app is a basic greeting app for Vercel.
The second app is a basic number analyzer app for Streamlit Community Cloud.

## Folder Structure

```text
deployment-lab/
  vercel-app/
    index.html
    style.css
    script.js
  streamlit-app/
    app.py
    requirements.txt
  README.md
```

## App Overview

### Vercel App

This is a simple greeting app made with HTML, CSS, and JavaScript.
The user enters a name and clicks a button.
The app then shows a greeting message.
If the input is empty, it shows a warning message.

### Streamlit App

This is a simple Number Analyzer app made with Streamlit.
The user enters a number and clicks the Analyze button.
The app shows the entered number, its square, its double, and its half.
It is designed to be short, clear, and easy to deploy.

## How to Run the Vercel App Locally

1. Open the `vercel-app` folder.
2. Open `index.html` in your browser.

You can also use a simple local server if you want, but it is not required for this project.

## How to Run the Streamlit App Locally

1. Open a terminal.
2. Go to the `streamlit-app` folder.
3. Install the dependency:

```bash
pip install -r requirements.txt
```

4. Run the app:

```bash
streamlit run app.py
```

## How to Deploy the Vercel App to Vercel

1. Push this project to GitHub.
2. Log in to Vercel.
3. Click **Add New Project**.
4. Import your GitHub repository.
5. For the root directory, select `deployment-lab/vercel-app` if needed.
6. Click **Deploy**.

## How to Deploy the Streamlit App to Streamlit Community Cloud

1. Push this project to GitHub.
2. Log in to Streamlit Community Cloud.
3. Click **New app**.
4. Select your repository.
5. Set the app file path to `deployment-lab/streamlit-app/app.py`.
6. Click **Deploy**.

## Debugging Example

A simple deployment issue happened in the Streamlit app because `requirements.txt` was missing the correct dependency.
The app failed during deployment because Streamlit was not installed in the cloud environment.
The fix was to check the deployment logs and update `requirements.txt` to include `streamlit`.
After that, the app deployed correctly.
