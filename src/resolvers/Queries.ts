/**
 * graphql queries definitions
 */
const hello = (_, { name }): string => {
  return `Hello ${name || "World"}`;
};

export { hello };
