// // console.log('Ola!')

// // type produtoLoja = {
// //     nome: string,
// //     preco: number,
// //     unidades: number
// // };

// // let meuProduto: produtoLoja = {
// //     nome: "Tenis",
// //     preco: 100.00,
// //     unidades: 5
// // }


// //interfaces (type x interface)
// type robot = {
//     id: number,
//     name: string
// };

// interface robot2 {
//     id: number,
//     name: string
// }


// const bot: robot = {
//     id: 1,
//     name: "Teste"
// };



// Classes

class Character {
    name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p1 = new Character("WIllia", 10, 98)