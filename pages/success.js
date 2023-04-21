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
        frontmatter: {title: 'Success!!!', layout: '404' },
        content: "## Pending admin approval"
      }
      return {
        props: {
          data: data,
        },
      };
};

export default notFound;
