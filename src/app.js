export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([{
      route: '',
      name: 'Dashboard',
      moduleId: 'dashboard',
      nav: true,
      title: 'Dashboard'
    }, ]);

    this.router = router;
  }
}
