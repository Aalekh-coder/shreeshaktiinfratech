import Location from "./Location";

// The dynamic metadata function
export async function generateMetadata({ params }) {
  // This takes the slug (or any route param) from the URL
  const slug = params.slug;

  // Custom logic for city from slug - adapt per your route
  const city = slug
    .split("in")
    [slug.split("in").length - 1].split("-")
    ?.slice(1)
    ?.join("-");

  // Return a metadata object as title / description, etc.
  return {
    title: city && `Bar Bending Machine Supplier in ${city}`,
  };
}

const Page = ({ params }) => {
  // If Location needs city, use the same logic, or pass params
  return <Location />;
};

export default Page;
