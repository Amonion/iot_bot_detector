async function main() {
  const ModelHost = await ethers.getContractFactory("ModelHost");
  const modelHost = await ModelHost.deploy(
    "QmfV3YbdjUoY2M6u6R2dCLPWkPeQPMbet3J6EfLGymd52b"
  );

  console.log("Contract deployed to:", modelHost.runner.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
