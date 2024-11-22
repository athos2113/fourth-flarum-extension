import app from 'flarum/admin/app';

app.initializers.add('junaid135/yello', () => {
  console.log('[junaid135/yello] Hello, admin!');
});
