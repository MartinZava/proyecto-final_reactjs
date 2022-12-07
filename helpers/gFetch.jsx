

export const productos = [
    {
        id: "1",
        marca: "Ducky",
        modelo: "Ducky One 3 Matcha",
        cantidad: 1,
        switches: "Cherry MX Brown",
        precio: 120,
        img: '../assets/img/teclados/ducky-one3matcha-1.jpg',
    },
    {
        id: "2",
        marca: "Ducky x Varmilo",
        modelo: "Ducky x Varmilo MIYA Pro Sakura Pink",
        cantidad: 1,
        switches: "Cherry MX Blue",
        precio: 150,
        img: `../assets/img/teclados/duckyxvarmilo-miya-prosakurapink-1.jpg`,
    },
    {
        id: "3",
        marca: "Filco",
        modelo: "Filco Majestouch Minila R",
        cantidad: 1,
        switches: "Gateron Red",
        precio: 130,
        img: `../assets/img/teclados/filco-majestouch-minilaR-1.jpg`,
    },
    {
        id: "4",
        marca: "HHKB",
        modelo: "HHKB Hybrid Type-S White 60",
        cantidad: 1,
        switches: "Kailh BOX Red",
        precio: 100,
        img: `../assets/img/teclados/hhkb-hybrid-type-swhite60-1.jpg`,
    },
    {
        id: "5",
        marca: "Leopold",
        modelo: "Leopold FC900R Two Tone White",
        cantidad: 1,
        switches: "Cherry MX Silver",
        precio: 110,
        img: `../assets/img/teclados/leopold-fc900r-twotone-white-1.jpg`,
    },
    {
        id: "6",
        marca: "Obinslab",
        modelo: "Obinslab Anne Pro 2",
        cantidad: 1,
        switches: "Cherry MX Brown",
        precio: 125,
        img: `../assets/img/teclados/obinslab-anne-pro2-1.jpg`,
    },
    {
        id: "7",
        marca: "Shurikey",
        modelo: "Shurikey Saizo 002 75 1",
        cantidad: 1,
        switches: "Kailh BOX Black",
        precio: 140,
        img: `../assets/img/teclados/Shurikey Saizo 002 75 1.jpg`,
    },
    {
        id: "8",
        marca: "Varmilo",
        modelo: "Varmilo MA Series V2 Dreams on Board",
        cantidad: 1,
        switches: "Gateron Blue",
        precio: 120,
        img: `../assets/img/teclados/varmilo-ma-seriesv2-dreams-on-board-1.jpg`,
    },
    {
        id: "9",
        marca: "Varmilo",
        modelo: "Varmilo Minilo VXB67 Mendozae 65",
        cantidad: 1,
        switches: "Cherry MX White",
        precio: 140,
        img: `../assets/img/teclados/varmilo-minilo-vxb67-mendozae65-1.jpg`,
    },
    {
        id: "10",
        marca: "Vortex",
        modelo: "Vortex Core Aluminum 40",
        cantidad: 1,
        switches: "Kailh BOX blue",
        precio: 130,
        img: `../assets/img/teclados/vortex-core-aluminum40-1.jpg`,
    },
    {
        id: "11",
        marca: "Vortex",
        modelo: "Vortex KBt",
        cantidad: 1,
        switches: "Kailh BOX Yellow",
        precio: 110,
        img: `../assets/img/teclados/vortex-kbt-1.jpg`,
    },
    {
        id: "12",
        marca: "Vortex",
        modelo: "Vortex Race 3",
        cantidad: 1,
        switches: "Kailh BOX Red",
        precio: 130,
        img: `../assets/img/teclados/vortex-race3-1.jpg`,
    },
]





export  const gFetch = () => {
    return new Promise ((resolve, reject) => {
        const condicion = true
        if (condicion){
            setTimeout(() =>{
                resolve(productos)
            }, 3000)
        } else {
            reject('olvidate wacho')
        }
    } )
}



