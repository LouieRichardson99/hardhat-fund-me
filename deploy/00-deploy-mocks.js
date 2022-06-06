const { network } = require("hardhat")
const {
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChains.includes(network.name)) {
        log("Local network detected. Deploying mocks...")
        await deploy("MockV3Aggregator", {
            from: deployer,
            log: true,
            contract: "MockV3Aggregator",
            args: [DECIMALS, INITIAL_ANSWER],
        })
        log("Mocks deployed!\n-------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
