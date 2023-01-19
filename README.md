# Interview Scheduler


- A responsive scheduling webapp using React JS. The backend Node JS REST API was developed by LHL. 
- The ReactJS frontend was developed to manage interviews.
- Axios used to request interview data from API.

### How To Use

- Upon Loading the calendar, new appointments can be added in empty slots.
- Existing appointments can be modified and cancelled (Edit/Delete buttons will appear on hover).
- Form validation ensures student name and interviewer fields cannot be empty. (no back-end validation)

### Setup

Install dependencies with `npm install`.

Technologies include:

- React JS
- Sass
- Axios
- Node JS, Express, Postgres (pre-developed by LHL).
- Storybook
- Jest
- Cypress

### Dependencies

- "axios": "^0.20.0",
- "classnames": "^2.2.6",
- "normalize.css": "^8.0.1",
- "react": "^16.9.0",
- "react-dom": "^16.9.0",
- "react-scripts": "3.4.4"

### Running Webpack Development Server

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


## Screenshots

!["Screenshot of Home Page on Desktop."](https://github.com/aingarant/scheduler/blob/master/docs/img/desktop_1.png)
Home Page on Desktop.  

!["Screenshot of Home Page on Desktop."](https://github.com/aingarant/scheduler/blob/master/docs/img/desktop_2.png)
Additng New or Editing Existing Interview Form

!["Screenshot of Home Page on Desktop."](https://github.com/aingarant/scheduler/blob/master/docs/img/desktop_3.png)
Deleting an Interview confirmation.

!["Screenshot of Home Page on Mobile."](https://github.com/aingarant/scheduler/blob/master/docs/img/mobile_1.png)

!["Screenshot of Home Page on Mobile."](https://github.com/aingarant/scheduler/blob/master/docs/img/mobile_2.png)

!["Screenshot of Home Page on Mobile."](https://github.com/aingarant/scheduler/blob/master/docs/img/mobile_3.png)
