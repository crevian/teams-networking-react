let firstName = "yes";
// firstName = false;

function getConf() {
  return {
    name: "my conf",
    x: 123,
    ready: true,
  };
}

const conf = getConf();
console.info(conf.name);

// conf.ready = "not ready";

export default null;
