import ButtonLink from "@/components/ButtonLink";
import Layout from "@/components/layout/Layout";
import { fetchProduct } from "@/lib/fetchFunctions";
import { Product } from "@/types/types";

export default function BlogSingle({ product }: { product: Product }) {
  return (
    <Layout>
      <section className="p-4 py-40">
        <div className="container">
          <h1 className="">{product.name}</h1>
          <p>More info coming soon.</p>
          <ButtonLink href="/shop" className="mt-6">Back to All Products</ButtonLink>
        </div>
      </section>
    </Layout>
  )
}
export async function getServerSideProps(context: any) {
  const baseUrl = context.req ? `http://${context.req.headers.host}` : '';
  const id = context.query.id;
  const product = await fetchProduct(baseUrl, id); 
  return { props: { product } };
}
