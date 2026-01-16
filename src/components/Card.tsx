import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  onViewDetail: () => void;
};

export function Card({ image, title, onViewDetail }: CardProps) {
  return (
    <article
      className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      onClick={onViewDetail}
    >
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="line-clamp-2 my-2 text-center uppercase text-xl font-semibold text-slate-900">
          {title}
        </h3>
        <div className="mt-4 w-full">
          <button
            type="button"
            className="btn-bg inline-flex w-full py-3.5 px-8 items-center cursor-pointer justify-center hover:text-white  text-sm font-semibold text-primary shadow-sm transition hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
