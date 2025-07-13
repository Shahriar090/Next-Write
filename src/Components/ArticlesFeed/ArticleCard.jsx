import BookmarkIcon from "@/Icons/BookmarkIcon";
import { stripHtml } from "@/utils/stripHtml";
import Image from "next/image";

const ArticleCard = ({ article }) => {
  const previewDescription =
    stripHtml(article.description).slice(0, 100) + "...";
  return (
    <article className="mb-10 pb-10 border-b border-gray-200">
      <div className="flex items-center mb-4">
        <Image
          src={article.author.avatar}
          alt="Author"
          height={30}
          width={30}
          className="rounded-full mr-2"
        />
        <span className="text-sm font-medium">{article.author.name}</span>
      </div>
      <a
        href="./details.html"
        className="text-xl font-bold mb-2 hover:underline cursor-pointer"
      >
        {article.title}
      </a>
      <p className="text-gray-700 mb-4">{previewDescription}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-gray-500 text-sm">
          <span>{article.date}</span>
          <span className="mx-1">·</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">
            {article.category}
          </span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <BookmarkIcon />
        </button>
      </div>
    </article>
  );
};

export default ArticleCard;
