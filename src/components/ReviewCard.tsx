import { FC } from "react";
import { ArrowRight } from "lucide-react";

interface ReviewCardProps {
  rating: number;
  name: string;
  review: string;
  price: number;
  moveType: string;
  from: string;
  to: string;
}

const ReviewCard: FC<ReviewCardProps> = ({
  rating,
  name,
  review,
  price,
  moveType,
  from,
  to,
}) => {
  return (
    <div className="w-full max-w-md bg-white border-gray-200 rounded-xl  p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="b-red-bg text-white font-semibold text-sm px-2 py-1 rounded-md">
          {rating}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>

      <p className="text-gray-600 italic text-sm mb-3">“{review}”</p>

      <hr className="my-2" />

      <div className="flex justify-between items-center text-sm">
        <div className="text-lg font-bold b-text">
          AED {price.toLocaleString()}
        </div>

        <div className="flex flex-col text-right">
          <span className="text-sm font-semibold b-red hover:underline cursor-pointer">
            {moveType}
          </span>
          <div className="flex items-center text-gray-500 text-xs">
            <span>{from}</span>
            <ArrowRight className="mx-1 w-4 h-4" />
            <span>{to}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
