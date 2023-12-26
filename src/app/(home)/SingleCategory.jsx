import Image from "next/image";
import Link from "next/link";

const SingleCategory = ({ category }) => {
  const { _id, imageUrl, name } = category;

  return (
    <Link href={`/products?categoryId=${_id}`}>
      <div className="card card-compact bg-base-100 shadow-2xl h-full justify-between">
        <figure>
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            className="lg:h-[300px] h-80 object-cover w-auto"
          />
        </figure>
        <div className="card-body flex-grow-0">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default SingleCategory;
