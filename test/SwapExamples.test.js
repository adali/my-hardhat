const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SwapExamples", function () {
  let swapRouter;
  let contract;

  let swapExamples;
  let owner;

  beforeEach(async function () {
    const SwapRouter = await ethers.getContractFactory("SwapRouter");
    const swapRouter = await SwapRouter.deploy(); // 部署合约
    await swapRouter.deployed(); // 等待部署完成
    console.log("SwapRouter deployed at:", swapRouter.address);

    [owner] = await ethers.getSigners();
    const SwapExamples = await ethers.getContractFactory("SwapExamples");
    swapExamples = await SwapExamples.deploy(swapRouter);
    await swapExamples.deployed();
  });

  it("Should have the correct DAI address", async function () {
    const DAI_ADDRESS = await swapExamples.DAI();
    expect(DAI_ADDRESS).to.equal("0x6B175474E89094C44Da98b954EedeAC495271d0F");
  });

  it("Should have the correct WETH9 address", async function () {
    const WETH9_ADDRESS = await swapExamples.WETH9();
    expect(WETH9_ADDRESS).to.equal("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");
  });

  // Add more tests to check swapping functionality, handling token balances, etc.
});
