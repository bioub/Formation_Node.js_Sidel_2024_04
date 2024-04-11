interface Coords {
    [key: string]: number;
}

const coords: Coords = {};

const keys = ['x', 'y', 'z'];

for (const key of keys) {
    coords[key] = 0;
}