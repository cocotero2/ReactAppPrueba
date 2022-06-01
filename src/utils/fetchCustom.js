   export const products = [
        {
            title : 'Alaska Roll',
            price : 7990,
            image : 'alaskaRoll.jpg',
            description: '',
            stock: 15,
            id: 1,
            

        },
        {
            title : 'Alaska Roll Especial',
            price : 6500,
            image : 'alaskaRollEspecial.jpg',
            description: '',
            stock: 10,
            id: 2,
            
        },
        {
            title : 'Avocado Roll',
            price : 7500,
            image : 'avocadoRoll.jpg',
            description: '',
            stock: 8,
            id: 3,
            
        },
        {
            title : 'California Roll',
            price : 8000,
            image : 'californiaRoll.jpg',
            description: '',
            stock: 3,
            id: 4,
            
        },
        {
            title : 'Fuji Roll',
            price : 5000,
            image : 'fujiRoll.jpg',
            description: '',
            stock: 20,
            id: 5,
            
        },
        {
            title : 'Sensei Roll',
            price : 3000,
            image : 'senseiRoll.jpg',
            description: '',
            stock: 5,
            id: 6,
            
        },
    ]

     export  const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 3000)
        })
    }  