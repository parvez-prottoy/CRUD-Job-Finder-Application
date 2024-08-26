import Jobs from "../components/Jobs";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      <Sidebar />
      <div class="lg:pl-[14rem]  mt-[5.8125rem]">{children}</div>
    </div>
  );
};

export default Layout;
