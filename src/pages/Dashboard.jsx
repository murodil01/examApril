import { Button } from "antd";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 
import { FaGraduationCap } from "react-icons/fa"; 
import { BellOutlined,UserAddOutlined,BankOutlined, UpOutlined, PhoneOutlined } from "@ant-design/icons"; 

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const goToTeachers = () => {
    navigate("/teachers");
  };

  return (
    <div className="flex gap-x-[147px] h-screen">
      <Sidebar goToTeachers={goToTeachers} />

      <div className="flex-1 bg-white p-8 relative overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-700">
            Learn how to launch faster <br /> watch our webinar for tips from
            our experts and get a limited time offer.
          </p>
          <div className="flex gap-6">
            <BellOutlined className="text-2xl" />
            <Button
              type="primary"
              className="bg-blue-900 px-[30px] py-[15px]"
              onClick={handleLogout}
            >
              Log out
            </Button>
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-2">
          Welcome to your dashboard, Udemy school
        </h1>
        <h3 className="text-md pl-[52px] text-gray-500 mb-6">
          Uyo/school/@teachable.com
        </h3>

        <div className="space-y-6 px-[52px]">
          <div className="flex gap-4">
          <UserAddOutlined className="text-4xl text-blue-700" />
            <div>
              <h3 className="text-lg font-semibold">Add other admins</h3>
              <p className="max-w-[500px] text-gray-600">
                Create rich course content and coaching products for your
                students. When you give them a pricing plan, they'll appear on
                your site!
              </p>
            </div>
          </div>

          <div className="flex gap-4">
          <BankOutlined className="text-4xl text-blue-700" />
            <div>
              <h3 className="text-lg font-semibold">Add classes</h3>
              <p className="max-w-[500px] text-gray-600">
                Create rich course content and coaching products for your
                students. When you give them a pricing plan, they'll appear on
                your site!
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <FaGraduationCap className="w-10 h-10 text-blue-700" /> 
            <div>
              <h3 className="text-lg font-semibold">Add students</h3>
              <p className="max-w-[500px] text-gray-600">
                Create rich course content and coaching products for your
                students. When you give them a pricing plan, they'll appear on
                your site!
              </p>
            </div>
          </div>
        </div>

        <button className="flex gap-2 items-center absolute top-[420px] bottom-[600px] fixed right-6 bg-[#1B2B65] text-white px-6 py-5 rounded-full shadow-lg">
          <PhoneOutlined /> Support <UpOutlined />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;