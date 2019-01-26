var grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
for(var i = 0; i < 4; i++){
    console.log(grid[i]);
}

var grid = [[0, 0, 0], [1, 1, 1], [2, 2, 2]]
for(var i = 0; i < 4; i++){
    console.log(grid[i]);
}

var grid = [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
for(var i = 0; i < 4; i++){
    console.log(grid[i]);
}

var grid = [[0, 1, 2], [0, 1, 2], [0, 1, 2]]

for(var i = 0; i<grid.length; i++){
    for(var j = 0; j<grid[i].length; j++){
        grid[i][j] = 'x';
    }
    console.log(grid[i]);
}
