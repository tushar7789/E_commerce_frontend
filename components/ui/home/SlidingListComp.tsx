import CategoryCard from "@/components/ui/home/CategoryCard"
import ProductImageURL from "@/utils/Images/Products";

interface A {
    times: number;
}

const SlidingListComp = ({ times }: A) => {
    return (
        <div className="h-min-50 w-full flex justify-around items-center">
            {Array.from({ length: 4 }, (_, index) => {
                const i = times * 4 + index;
                return (
                    <CategoryCard key={index} src={ProductImageURL[i].url} price={ProductImageURL[i].price} />
                )
            })}
        </div>
    );
}

export default SlidingListComp;