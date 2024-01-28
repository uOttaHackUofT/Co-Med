import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
const PatientView = () => {
  const [output, setOutput] = useState("");
  const onFinish = (values) => {
    //Fires when you press submit formvalues
    // console.log("Success:", values);
    // setOutput(values);
    const jsonString = JSON.stringify(values, null, 2);
    console.log(jsonString);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>Patient Information</h1>
        <Form.Item
          label="Fullname"
          name="Fullname"
          rules={[
            {
              required: true,
              message: "Please input your full name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="Date of Birth"
          rules={[
            {
              required: true,
              message: "Please input your date of birth!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="Gender"
          rules={[
            {
              required: true,
              message: "Please input your gender!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="Address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="City"
          name="City"
          rules={[
            {
              required: true,
              message: "Please input your city!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="State"
          name="State"
          rules={[
            {
              required: true,
              message: "Please input your state!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <h1>Emergency Contact</h1>
        <Form.Item
          label="Name"
          name="Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <h1>Medical History</h1>

        <Checkbox>Chest Pain</Checkbox>
        <Checkbox>Shortness of Breath</Checkbox>
        <Checkbox>Headache</Checkbox>
        <Checkbox>Nausea</Checkbox>
        <Checkbox>Fever</Checkbox>

        <Form.Item
          label="Other Medical History Please Specify:"
          name="Other Medical History Please Specify"
        >
          <Input />
        </Form.Item>

        <h1>Recent Injuries</h1>

        <Form.Item label="Recent Injuries" name="Recent Injuries">
          <Input />
        </Form.Item>

        <Form.Item label="Recent Illnesses" name="Recent Illnesses">
          <Input />
        </Form.Item>

        <h1>Substance Use History</h1>
        <Checkbox>Alcohol</Checkbox>
        <Checkbox>Marijuana</Checkbox>
        <Checkbox>Tobacco</Checkbox>
        <Form.Item
          label="Other Substances Please Specify:"
          name="Other Substances Please Specify"
        >
          <Input />
        </Form.Item>

        <h1>Declaration of Consent</h1>
        <Checkbox>
          I, the undersigned, hereby consent to medical examination and
          treatment. I understand that providing accurate and complete
          information is essential for proper medical care.
        </Checkbox>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default PatientView;
