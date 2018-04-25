import * as os from 'os';

let typeOfWindow;
// Title bar need to know if we are on mac or on an other OS
if(os.type() === 'Darwin') {
  typeOfWindow = 'hidden';
} else {
  typeOfWindow = 'default';
}

export default {
  title: 'My new project',
  frame: false,
  titleBarStyle: typeOfWindow,
  height: 600,
  width: 1024,
  min_width: 800,
  min_height: 600,
  backgroundColor: '#171B23',
};
