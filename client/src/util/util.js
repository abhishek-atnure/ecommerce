export function calculateTotal(cart) {
  let totalUSD = 0;
  Object.keys(cart).forEach((itemName) => {
    totalUSD += cart[itemName].price * cart[itemName].quantity;
  });
  return totalUSD;
}

export const timestamp = () => {
  const d = new Date();
  const year = d.getFullYear();
  const date = d.getDate();
  const day = d.toLocaleString("en-us", { weekday: "long" });
  const month = d.toLocaleString("default", { month: "long" });
  return {
    year: year,
    date: date,
    day: day,
    month: month,
  };
};
