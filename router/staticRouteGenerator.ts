import { GetStaticPaths, GetStaticProps } from "next";
import data from "@/data/products.json";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.products.map((product) => ({
    params: {
      name: product.name,
    },
  }));

  return {
    paths,
    fallback: false, 
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = data.products.find(
    (p) => p.name === params?.name
  );

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
    },
  };
};

