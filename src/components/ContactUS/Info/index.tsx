import React from "react";
import { contactContent } from "@/data/contactContent";

type Props = {};

const ContactUsInfo = (props: Props) => {
  return (
    <div className="max-w-lg space-y-3">
      <h3 className="text-yellow-600 font-semibold">Contact</h3>
      <p className="text-3xl font-semibold sm:text-4xl">
        {contactContent.title}
      </p>
      <p className="text-justify">
        {contactContent.intro}
      </p>
      <div>
        <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
          {contactContent.contactMethods.map((item, idx) => (
            <li key={idx} className="flex items-center gap-x-3">
              <div className="flex-none ">
                <item.icon size={20} />
              </div>
              <p>{item.contact}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactUsInfo;
