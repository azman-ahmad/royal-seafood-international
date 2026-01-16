"use client";

import { companyDetails } from "@/data/contact";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Form, Input, Select, Button } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const { Option } = Select;

export default function ContactPage() {
  const whatsappNumber = companyDetails.phone.replace(/[^\d]/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const emailLink = `mailto:${companyDetails.email}`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${companyDetails.address}, ${companyDetails.country}`
  )}`;
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success) {
        alert("Your message has been sent successfully!");
        form.resetFields();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="mx-auto max-w-380 px-8 py-16 text-black">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="md:pt-16 pt-0">
          <h1 className=" text-xl font-semibold uppercase text-primary ">
            Contact us
          </h1>

          <p className="mb-8 text-3xl font-extrabold text-gray-600 ">
            Get In Touch With Us
          </p>

          <div className="mb-6">
            <h3 className="mb-2 font-semibold">
              {" "}
              Address :
              <span>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 pl-1 hover:text-green-700 hover:underline"
                >
                  {companyDetails.address}
                  <br />
                </a>
              </span>
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-5">
              <div className="p-3 rounded-full btn-bg flex items-center justify-center">
                <WhatsAppOutlined className="whatsapp-icon" />
              </div>{" "}
              <div>
                <h1>
                  <span className="font-semibold">Phone</span>
                </h1>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-green-700 hover:underline"
                >
                  {companyDetails.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="p-3 rounded-full btn-bg flex items-center justify-center">
                <EnvelopeIcon className=" h-6 w-6 text-green-700 hover:text-white" />
              </div>
              <div>
                <h1>
                  <span className="font-semibold">Email</span>
                </h1>
                <a
                  href={emailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-green-700 hover:underline"
                >
                  {companyDetails.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-[#F4FAF9] p-8">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="enquiryType"
              rules={[
                { required: true, message: "Please select enquiry type" },
              ]}
            >
              <Select placeholder="Enquiry Type" className="h-10">
                <Option value="general">General Enquiry</Option>
                <Option value="sales">Sales</Option>
                <Option value="support">Support</Option>
              </Select>
            </Form.Item>

            <Form.Item name="companyName">
              <Input placeholder="Company Name (Optional)" className="h-10" />
            </Form.Item>

            <Form.Item
              name="country"
              rules={[{ required: true, message: "Country is required" }]}
            >
              <Input placeholder="Country" className="h-10" />
            </Form.Item>

            <Form.Item
              name="contactName"
              rules={[{ required: true, message: "Contact name is required" }]}
            >
              <Input placeholder="Contact Name" className="h-10" />
            </Form.Item>

            <div className="grid gap-4 md:grid-cols-2">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Invalid email" },
                ]}
              >
                <Input placeholder="Email" className="h-10" />
              </Form.Item>

              <Form.Item
                name="phone"
                rules={[{ required: true, message: "Phone is required" }]}
              >
                <Input placeholder="Phone" className="h-10" />
              </Form.Item>
            </div>

            <Form.Item
              name="message"
              rules={[{ required: true, message: "Message is required" }]}
            >
              <TextArea rows={4} placeholder="Message" />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              style={{
                background: "green",
                height: "35px",
                fontSize: "16px",
                borderRadius: "5px",
              }}
              className="bg-green-700 hover:!bg-green-800"
            >
              Send Now
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
