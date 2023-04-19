import config from "@config/config.json";


const Post = ({ post, className }) => {
  
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  
  return (
    <div className={className}>
      <div className="card">
        <p className="my-4">{convert(post.date)}</p>
        <h2 className="h3 mb-2 font-normal">
          <p className="block">
            {post.title}
          </p>
        </h2>
          {post.body}
      </div>
    </div>
  );
};

export default Post;
