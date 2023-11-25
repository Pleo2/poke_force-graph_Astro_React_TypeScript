export interface RandomTreeType {
    nodes: Node[];
    links: Link[];
}

export interface Link {
    source:          Node;
    target:          Node;
    __indexColor:    string;
    __controlPoints: null;
    index:           number;
    __curve:         null;
}

export interface Node {
    id:               number;
    name:             string;
    type:             Group;
    typeColor:        TypeColor;
    img:              string;
    group:            Group;
    __indexColor:     string;
    __bckgDimensions: number[];
    color:            Color;
    index:            number;
    x:                number;
    y:                number;
    vx:               number;
    vy:               number;
    z:                number;
    vz:               number;
}

export enum Color {
    A6Cee3 = "#a6cee3",
    B15928 = "#b15928",
    B2Df8A = "#b2df8a",
    Cab2D6 = "#cab2d6",
    E31A1C = "#e31a1c",
    Fb9A99 = "#fb9a99",
    Fdbf6F = "#fdbf6f",
    Ff7F00 = "#ff7f00",
    Ffff99 = "#ffff99",
    The1F78B4 = "#1f78b4",
    The33A02C = "#33a02c",
    The6A3D9A = "#6a3d9a",
}

export enum Group {
    Bug = "bug",
    Dragon = "dragon",
    Electric = "electric",
    Fairy = "fairy",
    Fighting = "fighting",
    Fire = "fire",
    Ghost = "ghost",
    Grass = "grass",
    Ground = "ground",
    Ice = "ice",
    Normal = "normal",
    Poison = "poison",
    Psychic = "psychic",
    Rock = "rock",
    Water = "water",
}

export enum TypeColor {
    A8A878 = "#A8A878",
    A8C0F0 = "#A8C0F0",
    Ad7942 = "#AD7942",
    D0C060 = "#D0C060",
    D0D0F8 = "#D0D0F8",
    Ef2F27 = "#EF2F27",
    F8D030 = "#F8D030",
    Ff80Ab = "#FF80AB",
    Ff9800 = "#FF9800",
    The0098D0 = "#0098D0",
    The7038F8 = "#7038F8",
    The705898 = "#705898",
    The7Ac942 = "#7AC942",
    The98D0F0 = "#98D0F0",
    The98D8Bd = "#98D8BD",
}
