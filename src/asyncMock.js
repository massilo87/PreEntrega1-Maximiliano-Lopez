const products = [
    {
        id: '1',
        title: 'Lampara led',
        price: 1500,
        category: 'Lamparas',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKyD81AiLLVwHFsOzi14Hv2hnVm5cGK9MLfBEDae5WHTFiqc5lTX2mYrevVkbCB8zypo&usqp=CAU',
        stock: 20,
        description: 'Descripcion de lampara con luz led'
    
    },
    {
        id: '2',
        title: 'Tags para mascotas',
        price: 500,
        category: 'Tags',
        img: 'https://ae01.alicdn.com/kf/S88ffcae567ec4198af961344305b90c0M/Etiquetas-personalizadas-3D-para-perros-accesorios-para-Collar-de-perro-gato-cachorro-etiqueta-de-identificaci-n.jpg_Q90.jpg_.webp',
        stock: 30,
        description: 'Descripcion de tags identificadores'
    
    },
    {
        id: '3',
        title: 'Llaveros personalizados',
        price: 300,
        category: 'Llaveros',
        img: 'https://files.cults3d.com/uploaders/1748905/illustration-file/1449824311-1030-0410/3D_printed_super_heros_formbyte.jpg',
        stock: 60,
        description: 'Descripcion de llaveros'
    
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}