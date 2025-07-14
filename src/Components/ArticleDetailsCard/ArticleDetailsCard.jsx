import Image from "next/image";
import Sidebar from "../Sidebar/Sidebar";

const ArticleDetailsCard = ({ article }) => {
  console.log(article, "from details");
  return (
    <div className="flex">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex items-center mb-6">
            <Image
              src={article.author.avatar}
              alt="Sumit Saha"
              height={48}
              width={48}
              className="h-12 w-12 rounded-full mr-4"
            />
            <div>
              <div className="flex items-center">
                <span className="font-medium mr-2">{article.author.name}</span>
                <button className="text-green-600 text-sm font-medium">
                  Follow
                </button>
              </div>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <span>{article.date}</span>
                <span className="mx-1">·</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div
          className="space-y-6"
          dangerouslySetInnerHTML={{ __html: article.description }}
        />
      </div>
      {/* sidebar */}
      <Sidebar />
    </div>
  );
};

export default ArticleDetailsCard;
