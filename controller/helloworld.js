const sayHello = async (request, response) => {
  try {
    // logic
    // response.status(200).json({
    //   message: "Hello World",
    // });
    throw new Error("seep");
  } catch (error) {
    response.status(500).json({
      message: "Server Error",
      data: error,
    });
  } finally {
    console.log("Tak Selalu");
  }
};

module.exports = {
  sayHello,
};
