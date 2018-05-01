let isEnvDevelopment = false;
if (process.env.ENVIRONMENT === 'DEV') {
  isEnvDevelopment = true;
}

export default {
    isDevelopment: isEnvDevelopment,
    isLiveReloading: (isEnvDevelopment)? true : false,
    isShowDebugToolsStartUp: (isEnvDevelopment)? true : false,
    isWindowAlwaysOnTop: false,
};
