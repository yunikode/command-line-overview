function type() {
  var typed = new Typed('.typer1', {
    strings: [
      'Starting VT100 ^1000\n `Ready for work`',
      'Commandline applications can replace everything.',
      'Commandline applications for every occasion.'
    ],
    smartBackspace: true,
    startDelay: 30,
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 300,
  })
}

export default type;
