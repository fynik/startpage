const getOptions = () => {
  const req = fetch("./config.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }  
  });
  return req.then(res => res.json());
}

const OptionsService = { getOptions }
export default OptionsService;