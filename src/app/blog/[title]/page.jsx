import ArticleDetailsCard from "@/Components/ArticleDetailsCard/ArticleDetailsCard";
import { getArticles } from "@/lib/getArticles";
import { generateSlug } from "@/utils/generateSlug";
import { notFound } from "next/navigation";

const BlogDetailsPage = async ({ params }) => {
  const articles = await getArticles();
  const { title } = params;
  const blogDetails = articles.find(
    (article) => generateSlug(article.title) === title
  );
  console.log(blogDetails, "from details page");

  if (!blogDetails) {
    notFound();
  }

  return <ArticleDetailsCard article={blogDetails} />;
};

export default BlogDetailsPage;
