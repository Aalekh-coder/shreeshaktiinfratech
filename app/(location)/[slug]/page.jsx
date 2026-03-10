import Location from "./Location";

export async function generateMetadata({ params }) {
  const slug = params?.slug;

  const parts = slug.split("-in-");
  const product = parts[0]?.replaceAll("-", " ");
  const city = parts[1]?.replaceAll("-", " ");

  return {
    title: `${product} in ${city} | Shree Shakti Infratech`,
    description: `Looking for ${product} in ${city}? Shree Shakti Infratech provides high quality machines with reliable performance and fast delivery.`,
  };
}

const Page = ({ params }) => {
  return <Location />;
};

export default Page;
