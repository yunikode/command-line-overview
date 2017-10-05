exports.files = {
  javascripts: {
    joinTo: {
      'js/app.js': /^(app)/,
      'js/vendor.js': /^node_modules/,
    },
  },
  stylesheets: { joinTo: 'css/app.css' },
};

exports.plugins = {
  babel: { presets: ['latest', 'stage-0'] },
  postcss: {
    processors: [
      require('autoprefixer')(['last 8 versions']),
      require('csswring')()
    ]
  },
  copycat: {
    fonts: ['node_modules/font-awesome/fonts'],
    img: ['app/img'],
    onlyChanged: true,
  },
};

exports.modules = {
  autoRequire: {
    'js/app.js': ['js/initialize'],
  },
};

exports.npm = {
  globals: {
    jQuery: 'jquery',
    $: 'jquery',
    Popper: 'popper.js',
    bootstrap: 'bootstrap',
    Typed: 'typed.js',
  },
  styles: {
    bootstrap: ['dist/css/bootstrap.css'],
  },
};
