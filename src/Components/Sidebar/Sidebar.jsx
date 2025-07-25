const Sidebar = () => {
  return (
    <div className="lg:w-1/3 mt-10 lg:mt-0">
      <div className="sticky top-20">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">
            Discover more of what matters to you
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Programming",
              "Data Science",
              "Technology",
              "Self Improvement",
              "Writing",
              "Relationships",
              "Machine Learning",
              "Productivity",
            ].map((topic) => (
              <a
                key={topic}
                href="#"
                className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-wrap text-sm text-gray-500 gap-x-4 gap-y-2">
            {[
              "Help",
              "Status",
              "Writers",
              "Blog",
              "Careers",
              "Privacy",
              "Terms",
              "About",
            ].map((link) => (
              <a key={link} href="#" className="hover:text-gray-700">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
