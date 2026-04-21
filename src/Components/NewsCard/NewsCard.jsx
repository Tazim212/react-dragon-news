import React from "react";
import { FaStar, FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        image_url,
        details,
        rating,
        total_view,
        author,
        tags,
    } = news;

    return (
        <div className="bg-white rounded-xl shadow-md max-w-3xl mx-5 overflow-hidden my-4">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt=""
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h4 className="font-semibold">{author?.name}</h4>
                        <p className="text-sm text-gray-500">
                            {new Date(author?.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 text-gray-500 text-lg">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold px-4 py-3 leading-snug">
                {title}
            </h2>

            {/* Image */}
            <div className="px-4">
                <img
                    src={image_url}
                    alt=""
                    className="w-full h-[300px] object-cover rounded-lg"
                />
            </div>

            {/* Details */}
            <div className="px-4 py-4 text-gray-600 text-sm leading-relaxed">
                <p>
                    {new Date(author?.published_date).toLocaleDateString()} | Tag Cloud Tags:{" "}
                    {tags?.join(", ")} –{" "}
                    {details.length > 150
                        ? 
                        details.slice(0, 150) + "..."
                        : 
                        details}
                </p>

                <button className="text-orange-500 font-semibold mt-2">
                    Read More
                </button>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t text-gray-600">

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                    <span>{rating?.number}</span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;