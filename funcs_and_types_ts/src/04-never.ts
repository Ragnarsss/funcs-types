const noEnd = () => {
  while (true) {
    console.log('funcion que nunca se detiene, tipo never');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};
