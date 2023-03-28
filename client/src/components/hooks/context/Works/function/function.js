export const filter = (total, render, value) => {
  const result = total?.filter((e) =>
    e.tecnologies.toString().toLowerCase().includes(value.toLowerCase()));

  return result;
};
