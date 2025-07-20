import React from "react";

let blogs = [
  // {
  //   title: "HTML Entities: A Guide to Displaying Special Characters in Web Pages",
  //   date: "2024-10-20",
  //   link: "https://your-blog-link.com/html-entities-guide",
  // },
  // {
  //   title: "Building a Download Button for PDFs in Next.js",
  //   date: "2023-12-02",
  //   link: "https://your-blog-link.com/download-pdf-nextjs",
  // },
  // {
  //   title: "Top 7 free frontend hoisting platform",
  //   date: "2023-11-09",
  //   link: "https://your-blog-link.com/free-frontend-hosting",
  // },
  // {
  //   title: "Docker Quick Start: Common Commands",
  //   date: "2023-10-19",
  //   link: "https://your-blog-link.com/docker-quick-start",
  // },
  // {
  //   title: "Getting Started with Git: A Beginner’s Guide to Common Git Commands",
  //   date: "2023-10-17",
  //   link: "https://your-blog-link.com/git-beginners-guide",
  // },
  {
    title: "Connecting Custom Domain to Vercel",
    date: "2025-01-15",
    link: "https://your-blog-link.com/custom-domain-vercel",
  },
  {
    title: "Push to multiple GitHub accounts!",
    date: "2024-12-28",
    link: "https://dev.to/nikhil_mahato/push-to-multiple-github-accounts-3k99",
  },
  {
    title: "next js app on cPanel",
    date: "2024-08-10",
    link: "https://dev.to/nikhil_mahato/next-js-app-on-cpanel-18lb",
  },
];

// Sort blogs by latest date
blogs = blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const Blog: React.FC = () => {
  return (
    <section className="py-12 px-4 ">
      <h2 className="text-pureBlack dark:text-pureWhite font-sans font-semibold tracking-[0.023] leading-5 text-xl mb-5">Writings</h2>
      <div className="flex flex-col space-y-6">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center gap-2">
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium font-sans text-md text-pureBlack dark:text-pureWhite leading-5 hover:underline transition"
              >
                {blog.title}
              </a>
              {index === 0 && (
                <span className="text-xs px-3 py-0.5 bg-neutralExtraLight rounded-lg text-pureBlack dark:text-pureWhite dark:bg-bgNeutral">
                  latest
                </span>
              )}
            </div>
            <p className="text-pureBlack text-sm dark:text-pureWhite font-sans font-thin opacity-70 tracking-[0.023] leading-5  mt-1">{blog.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
