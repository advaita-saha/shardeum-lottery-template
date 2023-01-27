import web3 from "./web3";

const address = "<contract address>";
const abi = "<ABI>"

export default new web3.eth.Contract(abi, address);
