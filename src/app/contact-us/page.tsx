import ContactUsForm from "@/components/ContactUS/Form";
import ContactUsInfo from "@/components/ContactUS/Info";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <main className="py-14 w-full mb-10">
      <div className="max-w-screen-xl w-full mx-auto px-4 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <ContactUsInfo />
          <div className="flex-1 mt-9 sm:max-w-lg lg:max-w-md">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
