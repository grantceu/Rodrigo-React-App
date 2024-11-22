// First, import the necessary React icons at the top
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";

// Then, define the data you need to export
export const skills = [
  { name: "Team Collaboration", icon: <FaReact className="text-blue-400 w-8 h-8" /> },
  { name: "Adaptability", icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
  { name: "Stress Management", icon: <FaPython className="text-yellow-500 w-8 h-8" /> },
  { name: "Technical Troubleshooting", icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
  { name: "Time Management", icon: <FaCss3Alt className="text-blue-500 w-8 h-8" /> },
  { name: "Communication", icon: <FaReact className="text-blue-400 w-8 h-8" /> },
  { name: "Project Management", icon: <FaNodeJs className="text-green-500 w-8 h-8" /> },
  { name: "Self-Learning", icon: <FaPython className="text-yellow-500 w-8 h-8" /> },
  { name: "Attention to Detail", icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
];

export const projects = [
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    subtitle: "Issued by Amazon Web Services Training and Certification",
    description:
      "Earners of this badge have demonstrated basic solution-building knowledge using AWS services and have a fundamental understanding of AWS Cloud concepts. Badge earners have acquired hands-on experience with compute, networking, database, and security services.",
    image: "https://i.postimg.cc/zvFgsphT/aws-cloud-quest-cloud-practitioner-1.png", // Add the appropriate image for the badge here
    link: "https://www.credly.com/badges/e0446070-5515-48fb-9ba8-1429b945e3c9/public_url",
  },
  {
    title: "AWS Educate Web Builder",
    subtitle: "Issued by Amazon Web Services Training and Certification",
    description:
      "Earners of this badge have completed Builder Labs training and achieved the required scores on the post-course assessment. They have demonstrated the ability to describe the overall process of application optimization, including app security and database integration.",
    image: "https://i.postimg.cc/Dy52X16m/aws-educate-web-builder.png", // Add the appropriate image for the badge here
    link: "https://www.credly.com/badges/965a7fa1-acf8-4cd9-831b-cb5084924343/public_url",
  },
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    subtitle: "Issued by Amazon Web Services Training and Certification",
    description:
      "Earners of this badge have taken the AWS Academy Cloud Foundations course. They have acquired foundational knowledge of cloud concepts, AWS core services, security, architecture, pricing, and support.",
    image: "https://i.postimg.cc/4N47K6tF/aws-academy-graduate-aws-academy-cloud-foundations.png", // Add the appropriate image for the badge here
    link: "https://www.credly.com/badges/0cda02df-457f-4199-9bbc-1481087631f8/public_url",
  },
];
