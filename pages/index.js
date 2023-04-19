import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Pagination from "@layouts/components/Pagination";
import Post from "@layouts/components/Post";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Lottie from "lottie-react";
import ZLogo from "../public/images/z-letter.json";
import { firestore } from "@lib/firestore";
import {
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
} from "@firebase/firestore";
import { useEffect, useState } from "react";

const Home = ({ posts }) => {
  const { pagination } = config.settings;
  const { name } = config.profile;
  const sortPostByDate = sortByDate(posts);

  return (
    <Base>
      {/* profile */}
      <div className="section">
        <div className="container">
          <div className="row">
            <div
              className="mx-auto text-center lg:col-8"
              style={{ justifyContent: "center" }}
            >
              <Lottie
                className="mx-auto"
                animationData={ZLogo}
                loop={true}
                style={{ width: 200, height: 200 }}
              />

              {markdownify(name, "h1", "text-6xl lg:text-8xl font-semibold")}
            </div>
          </div>
        </div>
      </div>

      {/* posts */}
      <div className="pt-4">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <div className="row">
                {sortPostByDate.slice(0, pagination).map((post, i) => (
                  <Post
                    className="col-12 mb-6 sm:col-6"
                    key={"key-" + i}
                    post={post}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Pagination
              totalPages={Math.ceil(posts.length / pagination)}
              currentPage={1}
            />
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;

// for homepage data
export const getServerSideProps = async () => {
  const getConfessions = async () => {
    const confessionsCollection = collection(firestore, "confessions");
    // construct a query to get up to 10 undone todos
    const confessionsQuery = query(
      confessionsCollection,
      where("approved", "==", true),
      limit(10)
    );
    // get the todos
    const querySnapshot = await getDocs(confessionsQuery);

    // map through todos adding them to an array
    const result = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    });
    return result;
  };
  const posts = await getConfessions();
  const postsArray = [];

  posts.forEach((e) => {
    postsArray.push({
        body: e?.data()?.body || "",
        title: e?.data()?.title || "",
        date: e?.data()?.date.toDate().toString() || "",
        author: e?.data()?.author || "",
    });
  });
  return {
    props: {
      posts: postsArray,
    },
  };
};
