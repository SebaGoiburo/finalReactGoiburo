const products = [
        {
            id: 1,
            nombre: "Apio",
            precio: 25.6,
            ubicacionImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdOQyMICr_-y7j3ijygiyyeWdSRFv9fgrIS8Ap495bmw&s",
            stock: 8,
            categoria: "verdura"
        },
        {
            id: 2,
            nombre: "Banana",
            precio: 90.5,
            ubicacionImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIPgeBZUGYjf-ohIUP-bohA3-93ARkwuhklC24lpfUQ&s",
            stock: 15,
            categoria: "fruta"
        },
        {
            id: 3,
            nombre: "Brocoli",
            precio: 34.5,
            ubicacionImagen: "https://www.shutterstock.com/image-photo/raw-broccoli-isolated-on-white-600nw-1052186909.jpg",
            stock: 3,
            categoria: "verdura"
        },
        {
            id: 4,
            nombre: "Frutilla",
            precio: 115.2,
            ubicacionImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmxpw4PZN8vIDeid4piN53RxYHioKl0cBF8SUYE1nIoQ&s",
            stock: 18,
            categoria: "fruta"
        },
        {
            id: 5,
            nombre: "Lechuga",
            precio: 344.25,
            ubicacionImagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsizIHQfS_JYAW6YOs4FJs1jNTRdz-hOtmsYM-YtmTgw&s",
            stock: 6,
            categoria: "verdura"
        },
        {
            id: 6,
            nombre: "Limon",
            precio: 234.3,
            ubicacionImagen: "https://media.istockphoto.com/id/466175634/es/foto/lim%C3%B3n-frutas-con-la-mitad-y-deja-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=Mn2iefDgLeoNZY_hTlZxHvNj6WZkpTi1CwPQyJC8BUY=",
            stock: 12,
            categoria: "fruta"
        },
        {
            id: 7,
            nombre: "Melón",
            precio: 234.87,
            ubicacionImagen: "https://www.shutterstock.com/image-photo/whole-slice-japanese-melons-orange-260nw-751347499.jpg",
            stock: 4,
            categoria: "fruta"
        },
        {
            id: 8,
            nombre: "Palta",
            precio: 234.5,
            ubicacionImagen: "https://www.shutterstock.com/image-photo/isolated-avocado-whole-fruit-cut-260nw-2121217286.jpg",
            stock: 9,
            categoria: "fruta"
        },
        {
            id: 9,
            nombre: "Papa",
            precio: 342.5,
            ubicacionImagen: "https://www.shutterstock.com/image-photo/young-potato-isolated-on-white-260nw-1916604071.jpg",
            stock: 17,
            categoria: "verdura"
        },
        {
            id: 10,
            nombre: "Sandia",
            precio: 267.5,
            ubicacionImagen: "https://img.freepik.com/foto-gratis/sandia-verde-rayada-madura-rebanada-seccion-transversal-aislada-fondo-blanco-espacio-copia-texto-o-imagenes-tipo-especial-baya-pulpa-rosa-dulce-semillas-negras-vista-lateral_639032-1254.jpg",
            stock: 2,
            categoria: "fruta"
        },
        {
            id: 11,
            nombre: "Tomate",
            precio: 734.5,
            ubicacionImagen: "https://media.istockphoto.com/id/1450576005/es/foto/tomate-aislado-tomate-sobre-fondo-blanco-perfecta-vista-lateral-de-tomate-retocado-con-trazado.jpg?s=612x612&w=0&k=20&c=DZQAmlxov8KbvT4vcSAoU9L5dU6bqNTbBESzBMtuMZ4=",
            stock: 13,
            categoria: "verdura"
        },
        {
            id: 12,
            nombre: "Uvas",
            precio: 334.5,
            ubicacionImagen: "https://www.shutterstock.com/image-photo/black-grape-dark-blue-isolated-260nw-2335329857.jpg",
            stock: 10,
            categoria: "fruta"
        }
];
    


export const getProducts = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.categoria == category));
        }, 2000);
    });
};

export const getProductById = (productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find((product)=> product.id === productId));
        }, 2000);
    });
};