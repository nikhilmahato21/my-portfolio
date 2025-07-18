
import { FaGithub,  FaXTwitter } from "react-icons/fa6"; // For X (Twitter)
import { MdOutlineFileDownload } from "react-icons/md"; // For download icon
import { IoMailOutline } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";

const Links = () => {
  return (
    <div className="flex items-center gap-4  pt-2 px-4 mb-4">
      {/* Resume Button */}
      <a
        href="/nikhil-resume.pdf" // Change to your resume path
        download
        className="flex items-center gap-2 px-4 py-2 mr-2 rounded-full font-semibold
                   bg-pureBlack text-white text-sm 
                   dark:bg-white dark:text-black transition-all ease-in-out duration-300
             hover:-translate-y-1"
      >
        Resume
        <MdOutlineFileDownload  className="text-lg" />
      </a>

      {/* Social Icons */}
      <div className="flex items-center gap-3">
        {/* Email */}
        <a
          href="mailto:nikhilmahato2104@gmail.com"
          className="p-2 rounded-full bg-gray-100 text-black 
                     dark:bg-bgNeutral dark:text-white  transition"
        >
          <IoMailOutline  className="text-md" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nikhilmahato21/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 text-black 
                     dark:bg-bgNeutral dark:text-white  transition"
        >
          <TiSocialLinkedin className="text-lg" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/nikhilmahato21"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 text-black 
                     dark:bg-bgNeutral dark:text-white  transition"
        >
          <FaGithub className="text-sm" />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/nikhilmahato21"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 text-black 
                     dark:bg-bgNeutral dark:text-white  transition"
        >
          <FaXTwitter className="text-sm" />
        </a>
      </div>
    </div>
  );
};

export default Links;
