import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((user) => user.username === values.username);

    if (userExists) {
      notification.error({
        message: "User Exists",
        description: "This username is already registered. Please sign in.",
      });
      return;
    }

    users.push(values);
    localStorage.setItem("users", JSON.stringify(users));

    notification.success({
      message: "Account Created",
      description: "You can now sign in.",
    });

    navigate("/signin");
  };

  return (
    <div className="min-h-screen max-w-[612px] h-auto mx-auto mt-[50px] flex flex-col items-center justify-center p-4">
      <h1 className="text-[rgba(79,79,79,1)] font-semibold text-[36px] leading-none text-center pb-[30px]">
        Welcome, Sign Up
      </h1>

      <Form
        onFinish={onFinish}
        className="w-[512px] px-[130px] py-[72px] rounded-lg bg-white shadow-xl border-1"
      >
        <p className="font-medium text-[16px] leading-[25px] text-[rgba(102,112,133,1)] text-center mb-[34px]">
          It is our great pleasure to have you on board!
        </p>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Enter your email" }]}
        >
          <Input className="h-[42px]" placeholder="Enter your Email" />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Enter username" }]}
        >
          <Input className="h-[42px]" placeholder="Create your Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Enter password" }]}
        >
          <Input.Password className="h-[42px]" placeholder="Create your Password" />
        </Form.Item>

        <Form.Item>
          <Button
            className="h-[42px] bg-[rgba(45,136,212,1)] font-extrabold text-[14px] leading-none text-[rgba(255,255,255,1)]"
            type="primary"
            htmlType="submit"
            block
          >
            Sign Up
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="link"
            onClick={() => navigate("/signin")}
            className="text-blue-500 hover:text-blue-700 block text-center mt-4"
          >
            Already have an account? Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;


/*import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/signin");
  };

  return (
    <div className="min-h-screen max-w-[612px] h-[382px] mx-auto mt-[50px] flex flex-col items-center justify-center p-4 ">
      <h1 className="text-[rgba(79,79,79,1)] font-semibold text-[36px] leading-none text-center pb-[53px]">
        Welcome, Sign Up
      </h1>

      <Form onFinish={onFinish} className="w-[512px] px-[130px] py-[72px] rounded-lg bg-white shadow-xl border-1">
        <p className="font-medium text-[16px] leading-[25px] text-[rgba(102,112,133,1)] text-center mb-[34px]">
          It is our great pleasure to have you on board!
        </p>

        <Form.Item name="email" rules={[{ required: true, message: "Enter your email" }]}>
          <Input className="h-[42px]" placeholder="Enter your Email" />
        </Form.Item>

        <Form.Item name="username" rules={[{ required: true, message: "Enter username" }]}>
          <Input className="h-[42px]" placeholder="Create your Username" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: "Enter password" }]}>
          <Input.Password className="h-[42px]" placeholder="Create your Password" />
        </Form.Item>

        <Form.Item>
          <Button className="h-[42px] bg-[rgba(45,136,212,1)] font-extrabold text-[14px] leading-none text-[rgba(255,255,255,1)]" type="primary" htmlType="submit" block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;*/
