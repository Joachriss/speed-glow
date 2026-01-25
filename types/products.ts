// Root interface
interface BeautyProducts {
    products: IBeautyProduct[];
}

// Single product interface
interface IBeautyProduct {
    id: number;
    name: string;
    slug: string;
    category: string;
    image: string; 
    brand: string;
    description: string;
}