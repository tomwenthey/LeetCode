// 200. Number of Islands

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        dfs(grid, i, j);
        count++;
      }
    }
  }
  return count;
};

let dfs = function(grid, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] !== "1"
  ) {
    return;
  }
  grid[i][j] = "#";
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
};

let landArray = new Array(1);
landArray[0] = ["1", "1", "0", "1", "0"];
// landArray[1] = ["1", "1", "0", "0", "0"];
// landArray[2] = ["0", "0", "1", "0", "0"];
// landArray[3] = ["0", "0", "0", "1", "1"];
console.log(numIslands(landArray));
