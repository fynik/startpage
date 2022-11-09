const getOptions = () => {
  const req = fetch("./config.json");
  return req.then(res => res.json());
}

const OptionsService = { getOptions }
export default OptionsService;