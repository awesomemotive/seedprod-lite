const version = process.env.SP_VERSION || 'Pro';
module.exports = {
  plugins: [
    [
      '@wordpress/babel-plugin-makepot',
      {
        'output': 'languages/seedprod-' + version.toLowerCase() + '.pot',
      },
    ],
  ],
  presets: [ '@vue/app' ],
};
