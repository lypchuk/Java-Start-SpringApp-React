export  interface IProductItem{
    id: number,
    name: string,
    image: string,
    description: string,
    creationTime: string,
    price: string,
    categoryName: string,
    categoryId: number,
    discount: number,
    productImages: IProductImages[],
}

interface IProductImages {
    id: number,
    name: string,
    priority: number,
    dateCreated: string,
    productId: number
}