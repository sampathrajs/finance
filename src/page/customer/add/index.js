import React from "react";
import { ContentContainer } from "../../../component/content";
import { Row, Col } from "antd";
import { Form, Input, Button, Radio, Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["java", "react", "angular"];

const initialValue = {
  firstName: "sampath",
  lastName: "raj",
  email: "sam@gmail.com",
  skill: ["java", "react"],
  gender: "",
};

export const AddCustomer = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  // const [indeterminate, setIndeterminate] = React.useState(true);
  // const [checkAll, setCheckAll] = React.useState(false);

  // const onChange = list => {
  //   setCheckedList(list);
  //   setIndeterminate(!!list.length && list.length < plainOptions.length);
  //   setCheckAll(list.length === plainOptions.length);
  // };

  return (
    <ContentContainer
      breadcrumbs={[
        { key: "home", label: "Home", path: "/" },
        { key: "customer", label: "Customer", path: "/customer" },
      ]}
    >
      <Row>
        <Col span={12} offset={6}>
          <Form
            name="customer"
            initialValues={initialValue}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please enter your first name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please enter your last name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email !",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Skill"
              name="skill"
              rules={[
                {
                  required: true,
                  message: "Please pick an skill!",
                },
              ]}
            >
              <CheckboxGroup options={plainOptions} />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: "Please pick an gender!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female 2</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </ContentContainer>
  );
};
