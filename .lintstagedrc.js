module.exports = {
  "*.{ts,tsx}": ["yarn lint:fix", () => "tsc -p tsconfig.json --noEmit"],
  "*": "yarn prettier:fix",
};
