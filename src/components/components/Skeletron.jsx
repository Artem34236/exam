import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
    return (
        <div className='w-full border-[1px] border-[#33333333]'>
            <div>
                <Skeleton height={220} width="100%" />
            </div>
            <div className='p-[30px] text-center'>
                <div>
                    <Skeleton height={25} width={150} className='mb-[25px]' />
                </div>
                <div className='flex items-center justify-between'>
                    <Skeleton height={32} width={60} />
                    <Skeleton height={40} width={100} />
                </div>
            </div>
        </div>
    );
};

export const SkeletonBigCard = () => {
    return (
        <div className='flex xl:flex-row flex-col items-center xl:items-start xl:justify-between'>
            <div className='max-w-max mb-[30px]'>
                <Skeleton width={400} height={400} borderRadius={8} />
            </div>

            <div className='flex flex-col md:gap-[34px] gap-[26px] xl:w-max max-w-[500px]'>
                <div className='pb-[34px] xl:text-left text-center border-[#33333333] border-b-[1px] xl:max-w-[306px]'>
                    <Skeleton height={32} width={'80%'} />
                </div>

                <div className='flex flex-col xl:items-start items-center gap-[28px]'>
                    <div className='flex gap-[26px] items-end'>
                        <Skeleton height={32} width={60} />
                        <Skeleton height={16} width={80} />
                    </div>

                    <Skeleton height={16} width={120} />

                    <div className='flex gap-[20px]'>
                        <Skeleton height={48} width={84} />
                        <Skeleton height={48} width={120} />
                    </div>
                </div>

                <div className='flex flex-col md:gap-[30px] gap-[12px]'>
                    <Skeleton height={32} width={100} />
                    <Skeleton height={20} width={'80%'} />
                    <Skeleton height={20} width={'60%'} />
                </div>
            </div>
        </div>
    );
};



const CategoryCaleton = () => {
    return (
        <Skeleton height={22} width={65} />
    )
}

const Skeletron = ({ count = 8 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <CardSkeleton key={i} />))}
        </>
    );
};

export const SkeletronSmoll = ({ count = 6 }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <CategoryCaleton key={i} />))}
        </>
    );
};

export default Skeletron;
