<p align='center'><img src='https://www.zupimages.net/up/18/18/ww48.png' style='width:100%'/></p>

# Installation

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Version](https://img.shields.io/badge/version-1.0.2-blue.svg)

You must install yarn to have best performance (not npm)
[Yarn Download](https://yarnpkg.com/en/docs/install)

After that, install [Electron-forge](https://electronforge.io/) and other tools

```bash
> yarn add global electron-forge cross-env gulp
```

Finaly, run the template and enjoy :

```bash
> git clone https://github.com/Kana00/electron-new-project.git
> cd electron-new-project
> yarn start
```


[![React](https://github.com/chentsulin/electron-react-boilerplate/blob/master/internals/img/react.png?raw=true)](https://facebook.github.io/react/)
[![Redux](https://github.com/chentsulin/electron-react-boilerplate/blob/master/internals/img/redux.png?raw=true)](http://redux.js.org/)
[![React Router](https://github.com/chentsulin/electron-react-boilerplate/blob/master/internals/img/react-router.png?raw=true)](https://github.com/ReactTraining/react-router)
[![Jest](https://github.com/chentsulin/electron-react-boilerplate/blob/master/internals/img/jest.png?raw=true)](https://facebook.github.io/jest/)
[![TypeScript](https://yt3.ggpht.com/-Z-HY_2zZwyw/AAAAAAAAAAI/AAAAAAAAAAA/qxqDsrqMTKg/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg)](http://www.typescriptlang.org/)
[![Gulp](https://i1.wp.com/g00glen00b.be/wp-content/uploads/2014/10/gulp-logo.png?fit=100%2C100&ssl=1)](https://gulpjs.com/)
[![Lottie](https://dnarea4pd8g37.cloudfront.net/image/thumb/Purple118/v4/48/1a/93/481a930b-8e07-2ab9-d3ca-102d81ce8697/source/100x100bb.jpg)](https://www.lottiefiles.com/)
[![Less](http://www.emmanuelgeorjon.com/images/2012/05/less_logo.jpg)](http://lesscss.org/)

---

## Folder tree

+ __\_\_tests\_\___ : where are the jest unit tests.
+ __assets__ : where are the images/fonts/animations.
+ __components__ : where are the components of react used in this app.
+ __config__ : files that export javascript objects. they are called in several files. this allows to have a few parameters co-ordinate.
+ __i18n__ : where are all translation, and the function that allow you to use I18n translations.
+ __redux__ : stores the redux store, actions and reduce. (a file `redux/action/listeAction` existe to avoid any collision of actions).
+ __routes__ : Routes are react components that are displayed or hidden along the route. for this reason, these special components are in a special folder. We can say that these components are like screens that stores business react components.
+ __typings__ : TypeScript provides you with variable typing. Sometimes, having a lot of typing and their javascript documentation is heavy to read. This folder stores all the variable definitions and modules of our application and imports them dynamically into all the application. Thus, our files remains legible to read.
+ __utils__ : Contains useful functions (or class) that are not react components. simply various tools (see exemple colorTools).

- start.ts : where Electron start and display our window.
- app.tsx : where is stored the mount point of our react application.

---

## Make the app in production
If you are on Windows, change `mac/icon.icns` to `win/icon.ico`.
If you are on Linux, change `mac/icon.icns` to `png/icon.png`
```JSON
  "electronPackagerConfig": {
    "packageManager": "yarn",
    "icon": "src/assets/images/icons/mac/icon.icns",
    "asar": true
  },
```

To remove the warning where electron-compile tries to compile the definition files ".d.ts", remove them temporarily before a production compilations.

---
Note : Title bar si slightly different on Windows and Linux (Below, you can see the difference).

![windows title bar](https://www.zupimages.net/up/18/18/ebim.png)
