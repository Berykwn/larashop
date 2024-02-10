const CategoryProduct = ({ data }) => {
    return (
        <div className="py-4 max-w-screen-xl">
            <div className="flex flex-wrap gap-2 md:gap-4">
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <span
                            key={index}
                            className="bg-slate-100 text-slate-800 text-xs md:text-sm font-medium px-3 py-1 rounded-full"
                        >
                            {item.name}
                        </span>
                    ))
                ) : (
                    <>Category not found!</>
                )}
            </div>
        </div>
    );
};

export default CategoryProduct;
