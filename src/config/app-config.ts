const BASE_URL = `https://gxxph4h9l6.execute-api.us-east-1.amazonaws.com/default/front_end_hiring/wrong`;
const PROXY_SERVER_URL = 'https://cors-anywhere.herokuapp.com/';
const NumberOfAPICallRetryAttempt = 2;
const APITimeoutDuration = 4e3; // In milliseconds

const AppConfig = {BASE_URL, NumberOfAPICallRetryAttempt, APITimeoutDuration, PROXY_SERVER_URL};

export default AppConfig;