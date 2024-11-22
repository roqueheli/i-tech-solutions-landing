import React from "react";
import Link from "next/link";

type TechCardProps = {
  icon: React.ComponentType<{ size: number, className: string }>;
  name: string;
  type: string;
  description: string;
  link?: string;
  highlight?: string;
};

const TechCard: React.FC<TechCardProps> = ({
  icon: Icon,
  name,
  type,
  description,
  link,
  highlight,
}) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 h-full">
      {/* Icon */}
      <div className="flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
        <Icon size={40} className="text-indigo-600" />
      </div>

      {/* Name */}
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>

      {/* Type */}
      <p className="text-sm text-gray-500 mt-1">{type}</p>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-3 text-center">{description}</p>

      {/* Link */}
      {link && (
        <div className="mt-auto">
          <Link
            href={link}
            className="text-yellow-600 hover:underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {highlight}
          </Link>
        </div>
      )}
    </div>
  );
};

export default TechCard;
