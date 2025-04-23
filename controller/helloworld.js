const sayHello = async (request, response) => {
  try {
    const angka = 1;
    const angka2 = 2;
    const hasil = angka + angka2;




    response.status(200).json({
      message: "Hello World",
      data: {
        angka,
        angka2,
        hasil,
      },
    });
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
