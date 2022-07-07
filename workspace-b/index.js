const cowsay = require("cowsay");

const serve = require("workspace-a/lib").serve;
serve(
  cowsay.say({
    text: "Hellooo froom workspace-b! oggy chao ca nha",
    e: "oO",
    T: "U ",
  })
);
