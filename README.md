# Web3 Voting App
A web3 voting app built with `Solidity` and `web3js`

## Getting started
- Clone the repo: `git clone`
- Install `truffle` globally: `npm i truffle -g`
- Install all `npm packages` in `package.json` file: `npm i`
- Install Ganache from [here](https://trufflesuite.com/ganache/)

## Running the app locally
- Open the `ganache` app installed. Create a new workspace. You should see a list of 10 fake accounts
![Screenshot from 2022-10-25 21-16-29](https://user-images.githubusercontent.com/80149314/197862210-92ab8359-273b-4c9e-aa33-9852fe89d489.png)
- Update the `truffle-config.js` file to:
```javascript
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "5777", // Any network (default: none)
    },
  },
};
```
- Deploy the smart contract by running: `truffle migrate --reset`
- Upon successful deployment, you should see the contract address in the console. Add the contract address to the `index.js`
![Screenshot from 2022-10-25 21-25-02](https://user-images.githubusercontent.com/80149314/197863950-dfa565e2-e147-4d92-970f-93e776329df7.png)

- Add the contract addres to the `index.js` file on line `9`:
![Screenshot from 2022-10-25 21-21-55](https://user-images.githubusercontent.com/80149314/197864157-cf1de937-b9f3-4182-b5c8-e72e977ba4ba.png)

- Add one of the fake account numbers to the `index.js` file on line `23`:
![Screenshot from 2022-10-25 21-28-46](https://user-images.githubusercontent.com/80149314/197864753-b0b47fa2-1c9c-49b6-b624-f63f6aa84c5d.png)


## Voting
- Open the `index.html` file using your browser
![Screenshot from 2022-10-25 21-19-56](https://user-images.githubusercontent.com/80149314/197862862-d1a354bb-9122-4863-958e-c30275272f46.png)
- Type the candidate name in the input field and hit the `Vote` button. A user can only vote once.
