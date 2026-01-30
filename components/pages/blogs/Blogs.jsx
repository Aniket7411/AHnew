"use client";

import React from "react";
import { useRouter } from "next/navigation";

const blogs = [
  {
    id: 1,
    title: "10 Expert Tips for Crafting the Perfect Assignment",
    description:
      "Student writing assignments often are a tough grind. However, if a student irrespective of his academic stage wants to enhance his grades or finding an assignement writing service, must never overlook the venerable art of writing assignments.",
    author: "Aakanksha Sharma",
    date: "July 17, 2023",
    image: "/images/blog1.svg",
  },
  {
    id: 2,
    title: "Proactive Controversial Topics: 18 Ideas for Academic Discussion in 2025",
    description:
      "Controversy drives academic growth by challenging assumptions and enhancing analysis. Selecting a controversial academic topic collectively influences your research variables and academic discussion insights. ",
    author: "Richik Mukherjee",
    date: "June 5, 2023",
    image: "/images/blog2.svg",
  },
  {
    id: 3,
    title: "Mastering Research Assignments: A Guide to Writing a Perfect Paper",
    description:
      "Studies show research papers should not intimidate students! The combination of thoughtful strategy and some professional assignment writing tips for students enables you to develop impressive written work.",
    author: "Dimple Jairamdassani",
    date: "May 29, 2023",
    image: "/images/blog3.jpg",
  },
  {
    id: 4,
    title: "Need Help with Your Assignments? Check out the Best Writing Services - The Assignment Hub",
    description:
      "You only need to contact the Assignment Hub, a company known for our dedication to quality, we deliver students all over the world unmatched support...",
    author: "Priya Kumari",
    date: "May 22, 2023",
    image: "/images/blog4.png",
  },
  {
    id: 5,
    title: "5 easy steps to write an argumentative Essay",
    description:
      "Essay writing has great significance to you in achieving constant success in your academic career. There are more than one reasons why essay writing is considered to be an important part of your learning...",
    author: "Richik Mukherjee",
    date: "May 12, 2023",
    image: "/images/blog5.svg",
  },
  {
    id: 6,
    title: "How Artificial Intelligence is Revolutionizing Assignment Writing Services",
    description:
      "On this planet, the introduction of AI radically changed the digital landscape. Now, in assignment writing, one finds AI being used by a user...",
    author: "Richik Mukherjee",
    date: "May 12, 2023",
    image: "/images/blog6.png",
  },
  // {
  //   id: 6,
  //   title: "How to Write and What to Include in Research Proposals?",
  //   description:
  //     "The writing of a research proposal is an important step in the process of conducting...",
  //   author: "Dimple Jairamdassani",
  //   date: "May 8, 2023",
  //   image: "https://via.placeholder.com/400x250",
  // },
];

const BlogsPage = () => {
  const router = useRouter();

  const handleBlogClick = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className=" ">
        <div
          className="text-4xl font-bold text-center mb-10 py-10 absolute w-full z-0"
          style={{
            backgroundImage: "url('/images/blogsBg.svg')", // Add the correct path to your background image
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            backgroundSize: "cover",
            height: '50vh'
          }}
        >
          Blogs & Updates
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-16 z-10 pt-28 ">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer z-10"
              onClick={() => handleBlogClick(blog.id)} // Navigate on click
            >
              {/* Blog Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent backdrop-blur-[2px]"></div> */}
              </div>
              {/* Blog Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between text-gray-500 text-xs mt-4">
                  {/* <span>By: {blog.author}</span> */}
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
