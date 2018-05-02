import * as os from 'os';

let typeOfWindow = (os.type() === 'Darwin') ? 'hidden' : 'default'

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
