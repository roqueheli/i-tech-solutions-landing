import Image from "next/image";
import Link from "next/link";
import { footerContent } from "@/data/footer.content";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full mt-auto">
      <div className="w-full mx-auto px-4 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <Image
              src="/it-logo-gold.png"
              alt="i-tech-logo-footer"
              width={162}
              height={162}
            />
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerContent.links?.map((item, idx) => (
                <li
                  key={`footer-links-${idx}`}
                  className="hover:text-gray-500 duration-150"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:mt-0 sm:mt-0 xs:mt-5">
            <p className="font-semibold">{footerContent.textFollowUs}</p>
            <div className="flex items-center gap-3 mt-5 sm:block">
              <ul className="flex flex-wrap items-center gap-9 text-sm sm:text-base">
                {footerContent.rrss?.map((item, idx) => (
                  <li
                    key={`footer-rrss-${idx}`}
                    className="text-yellow-500 hover:text-blue-400 duration-150"
                  >
                    <Link href={item.href}>
                      <item.icon size={25} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p>{footerContent.textRightsReseved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
