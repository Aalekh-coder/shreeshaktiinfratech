import Location from "./Location";

export async function generateMetadata({ params }) {
  const slug = params?.slug;

  const city = slug
    .split("in")
    [slug.split("in").length - 1].split("-")
    ?.slice(1)
    ?.join("-");

  return {
    title: city && `Bar Bending Machine Supplier in ${city}`,
    description:`Bar Bending Machine Supplier in ${city}. Shree Shakti Infratech are the most accurate machine that offer you efficient performance`
  };
}

const Page = ({ params }) => {
  return <Location />;
};

export default Page;
