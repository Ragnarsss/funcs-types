//parametros por defecto
export const createProd = (
  id: string | number,
  isNew: boolean = false,
  stock = 1
) => {
  return {
    id,
    stock,
    isNew,
  };
};

console.log(createProd(12, undefined, 0));
