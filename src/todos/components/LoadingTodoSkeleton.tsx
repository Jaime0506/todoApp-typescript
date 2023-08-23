import { memo } from 'react'
import { Skeleton } from "@nextui-org/react";

interface Props {
    show: boolean
}

export const LoadingTodoSkeleton = memo(({ show }: Props) => {
    
    return (
        <>
            {show && (
                <section className="container pl-5 pb-5 pr-5 flex flex-row gap-3 items-center justify-center">
                    <div className="w-full flex flex-row gap-2">
                        <div className="flex flex-row w-full gap-2">
                            <Skeleton
                                className="w-5 rounded-full"
                            >
                                <div className="h-5 w-full rounded-full bg-secondary"></div>
                            </Skeleton>

                            <Skeleton
                                className="w-3/5 rounded-lg"
                            >
                                <div className="h-5 w-full rounded-lg bg-secondary"></div>
                            </Skeleton>
                        </div>
                        <Skeleton
                            className="w-12 rounded-full"
                        >
                            <div className="h-5 w-full rounded-full bg-secondary"></div>
                        </Skeleton>
                    </div>
                </section>
            )}
        </>
    );
});
