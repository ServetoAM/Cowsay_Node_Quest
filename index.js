const cowsay = require('cowsay');

function infos() {
  return {
    name: "AnneMarie",
    campus: "RemoteFr",
  };
}

function action() {
  console.log(
    cowsay.say({
      text: infos().name + infos().campus,
      e: "oO",
      T: "U ",
    })
  );
}

action();
