import BookmarkIcon from "@/Icons/BookmarkIcon";
import Image from "next/image";
import Sort from "./Sort";

const ArticlesFeed = () => {
  return (
    <div className="lg:w-2/3 lg:pr-12">
      {/* Sorting Dropdown */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Articles</h2>
        <Sort />
      </div>

      {/* Article 1 */}
      <article className="mb-10 pb-10 border-b border-gray-200">
        <div className="flex items-center mb-4">
          <Image
            src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75"
            alt="Author"
            height={30}
            width={30}
            className="rounded-full mr-2"
          />
          <span className="text-sm font-medium">Sumit Saha</span>
        </div>
        <a
          href="./details.html"
          className="text-xl font-bold mb-2 hover:underline cursor-pointer"
        >
          The Ultimate Guide to Tailwind CSS v4: What is New and Improved
        </a>
        <p className="text-gray-700 mb-4">
          Discover the latest features and improvements in Tailwind CSS v4 and
          how they can enhance your web development workflow.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500 text-sm">
            <span>May 14</span>
            <span className="mx-1">·</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">
              Web Development
            </span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <BookmarkIcon />
          </button>
        </div>
      </article>

      {/* Article 2 */}
      <article className="mb-10 pb-10 border-b border-gray-200">
        <div className="flex items-center mb-4">
          <Image
            src="https://avatars.githubusercontent.com/u/22261152?v=4"
            alt="Author"
            height={30}
            width={30}
            className="rounded-full mr-2"
          />
          <span className="text-sm font-medium">Saad Hasan</span>
        </div>
        <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">
          The Rise of AI in Content Creation: Opportunities and Challenges
        </h2>
        <p className="text-gray-700 mb-4">
          Explore how artificial intelligence is transforming content creation
          and what it means for writers and creators.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500 text-sm">
            <span>May 12</span>
            <span className="mx-1">·</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">AI</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <BookmarkIcon />
          </button>
        </div>
      </article>

      {/* Load More Button */}
      <div className="text-center">
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
          Load more
        </button>
      </div>
    </div>
  );
};

export default ArticlesFeed;
