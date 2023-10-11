export enum ElementType {
    AGUA = 0,
    FUEGO = 1,
    ELECTRICO = 2,
    PLANTA = 3,
    DRAGON = 4,
    BICHO = 5,
    VOLADOR = 6,
    NORMAL = 7,
    VENENO = 8
}

// DATOS PARA CREAR POKEMONES
export interface PokeData {
    id: string;
    hp: number;
    name: string;
    type: ElementType
}

// Valores para el select
export const PokeTypes = [
    {
        code: 0,
        name: 'Agua'
    },
    {
        code: 1,
        name: 'Fuego'
    },
    {
        code: 2,
        name: 'Eléctrico'
    },
    {
        code: 3,
        name: 'Planta'
    },
    {
        code: 4,
        name: 'Dragon'
    },
]

// LISTA DE POKEMONES
export const PokemonLists: PokeData[] = [
    { id: '0', hp: 100, name: 'charmander', type: ElementType.FUEGO },
    { id: '1', hp: 100, name: 'Bulbasaur', type: ElementType.PLANTA },
    { id: '2', hp: 100, name: 'Squirtel', type: ElementType.AGUA },
    { id: '3', hp: 100, name: 'Caterpie', type: ElementType.BICHO },
    { id: '4', hp: 100, name: 'Weedle', type: ElementType.BICHO },
    { id: '5', hp: 100, name: 'Pidgey', type: ElementType.VOLADOR },
    { id: '6', hp: 100, name: 'Ratata', type: ElementType.NORMAL },
    { id: '7', hp: 100, name: 'Spearow', type: ElementType.VOLADOR },
    { id: '8', hp: 100, name: 'Ekans', type: ElementType.VENENO },
    { id: '9', hp: 100, name: 'Pikachu', type: ElementType.ELECTRICO },
    { id: '10', hp: 100, name: 'Nidoran', type: ElementType.VENENO },
    { id: '11', hp: 100, name: 'Nidorina', type: ElementType.VENENO },
    { id: '12', hp: 100, name: 'Vulpix', type: ElementType.FUEGO },
    { id: '13', hp: 100, name: 'Jigglypuff', type: ElementType.NORMAL },
    { id: '14', hp: 100, name: 'Zubat', type: ElementType.VENENO },
    { id: '15', hp: 100, name: 'Oddish', type: ElementType.PLANTA },
    { id: '16', hp: 100, name: 'Paras', type: ElementType.PLANTA },
    { id: '17', hp: 100, name: 'Venonat', type: ElementType.VENENO },
]