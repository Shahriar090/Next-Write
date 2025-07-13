import { getArticles } from "@/lib/getArticles";
import ArticleCard from "./ArticleCard";
import Sort from "./Sort";

const ArticlesFeed = () => {
  const articles = getArticles();

  return (
    <div className="lg:w-2/3 lg:pr-12">
      {/* Sorting Dropdown */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Articles</h2>
        <Sort />
      </div>
      {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}

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
