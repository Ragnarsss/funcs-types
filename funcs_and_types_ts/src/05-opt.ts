//parametros opcionales y valores por defecto
export const createProd = (
  id: string | number,
  isNew: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 1, //nullish-coalescing, para evitar errores con los valores 0, '', false
    isNew,
  };
};
