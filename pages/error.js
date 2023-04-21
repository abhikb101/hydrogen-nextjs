import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";


const notFound = ({ data }) => {
  return (
    <Base>
      <NotFound data={data} />
    </Base>
  );
};

// get 404 page data
export const getStaticProps = async () => {
  let data = {
    frontmatter: {title: 'Something went wrong', layout: '404' },
    content: "## Please try again later"
  }
  return {
    props: {
      data: data,
    },
  };
};

export default notFound;
