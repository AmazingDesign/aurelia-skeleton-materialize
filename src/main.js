export function configure(aurelia) {
  let materialize = 'materialize';
  return aurelia.loader.loadModule(materialize).then(() => {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-materialize-bridge', bridge => bridge.useAll());
    return aurelia.start().then(a => a.setRoot());
  });
}
