import { defineType } from "sanity";

export default defineType({
  name: "contactInfo",
  type: "document",
  title: "Contact Information",
  fields: [
    {
      name: "phone",
      type: "string",
      title: "Phone Number",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "facebook",
      type: "url",
      title: "Facebook Profile URL",
    },
  ],
});