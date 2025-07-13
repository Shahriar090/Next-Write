import ArticlesFeed from "@/Components/ArticlesFeed/ArticlesFeed";
import Sidebar from "@/Components/Sidebar/Sidebar";

const HomePage = () => {
  return (
    <section className="py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Articles Feed */}
          <ArticlesFeed />

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
