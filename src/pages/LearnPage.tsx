
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { BookOpen, GraduationCap, ScrollText } from "lucide-react";

const LearnPage = () => {
  const courses = [
    {
      title: "Foundations of Siddha",
      description: "Learn the basic principles and philosophy behind Siddha medicine.",
      duration: "8 weeks",
      icon: <BookOpen className="w-8 h-8 text-siddha-dark-green" />
    },
    {
      title: "Herbal Studies",
      description: "Deep dive into medicinal herbs and their applications in Siddha medicine.",
      duration: "12 weeks",
      icon: <ScrollText className="w-8 h-8 text-siddha-dark-green" />
    },
    {
      title: "Advanced Practice",
      description: "Advanced techniques and practical applications of Siddha medicine.",
      duration: "16 weeks",
      icon: <GraduationCap className="w-8 h-8 text-siddha-dark-green" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Learn Siddha Medicine - Courses and Education</title>
        <meta name="description" content="Explore our comprehensive Siddha medicine courses. From beginner to advanced levels, learn the art and science of traditional healing." />
      </Helmet>
      
      <div className="min-h-screen max-w-6xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl pt-16">
        <Navbar />
        <div className="px-6 py-12 bg-siddha-light-beige">
          <h1 className="text-4xl font-bold text-siddha-dark-green mb-8">Learn Siddha Medicine</h1>
          
          <div className="grid gap-8 md:grid-cols-3">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold text-siddha-dark-green mb-2">{course.title}</h3>
                <p className="text-siddha-dark-green mb-4">{course.description}</p>
                <p className="text-sm text-siddha-accent-green">Duration: {course.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnPage;
