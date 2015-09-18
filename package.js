Package.describe({
  name: 'space:accounts-ui',
  version: '0.1.0',
  summary: 'Admin interface for managing accounts in Space applications.',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use([
    'coffeescript',
    'templating',
    'peerlibrary:blaze-components@0.13.0',
    'space:accounts@0.1.0',
    'space:ui@5.3.0',
  ]);

  api.addFiles([
    'source/server/module.coffee',
  ], 'server');

  api.addFiles([
    'source/client/module.coffee',
    'source/client/stores/accounts-store.coffee',
    'source/client/views/admin-view.html',
    'source/client/views/admin-view.coffee',
  ], 'client');

});
