export const filter = (total, render, value) => {
  const result = total?.filter((e) =>
    e.technologies.toString().toLowerCase().includes(value.toLowerCase()));

  return result;
};
