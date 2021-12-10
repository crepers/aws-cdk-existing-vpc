// asset-input/src/lambda/index.js
exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Exist VPC with CDK - Hello from Lambda!")
  };
  return response;
};
