import ArticleDetailsCard from "@/Components/ArticleDetailsCard/ArticleDetailsCard";
import { getArticles } from "@/lib/getArticles";
import { generateSlug } from "@/utils/generateSlug";

const BlogDetailsPage = ({ params }) => {
  const articles = getArticles();
  const { title } = params;
  const blogDetails = articles.find(
    (article) => generateSlug(article.title) === title
  );

  return <ArticleDetailsCard article={blogDetails} />;
};

export default BlogDetailsPage;
