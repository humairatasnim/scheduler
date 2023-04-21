# Interview Scheduler
Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Features
1. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday.
2. Each appointment has one student and one interviewer.
3. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list.
4. The user can save the appointment and view the entire schedule of appointments on any day of the week.
5. Appointments can also be edited or deleted.

## Screenshots
!["Book appointment"](https://github.com/humairatasnim/scheduler/blob/master/docs/appointment-form.png)
!["Cancel appointment"](https://github.com/humairatasnim/scheduler/blob/master/docs/confirm-cancellation.png)
