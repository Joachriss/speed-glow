// Root interface
interface BeautyProducts {
    products: IBeautyProduct[];
}

// Single product interface
interface IBeautyProduct {
    id: number;
    name: string;
    slug: string;
    category: string; // extendable
    image: string; // URL to product image
    brand: string;
    price: number;
    currency: string;
    rating: number; // average rating, e.g. 4.5
    stock: number;  // available units
    description: string;
}