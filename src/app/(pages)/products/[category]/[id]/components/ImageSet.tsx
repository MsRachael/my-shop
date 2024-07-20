import Image from 'next/image'
import React from 'react'

type Props = {
    data: {
        imgSet: string[],
        img: string,
        name: string,
        category: string
    }
}

export default function ImageSet({data}: Props) {
    return (
        <div className="h-full w-96 md:w-[800px] flex flex-col-reverse md:flex-row items-start justify-center gap-4 rounded-sm">
                <div className="flex items-start justify-start gap-2 flex-row md:flex-col">
                    {data?.imgSet.map((img: string, idx: number) => (
                        <Image
                            key={idx}
                            src="/placeholder/img.svg"
                            // src={`/products/${data?.category?.toLowerCase() ?? ""}${img}`}
                            alt={data?.name ?? ""}
                            width={100}
                            height={100}
                            className="shadow-sm border p-2"
                        />
                    ))}
                </div>
                <div className="h-[400px] w-96 md:w-[500px] flex items-center justify-center">
                    <Image
                        src={`/products/${data?.category?.toLowerCase() ?? ""}${
                            data?.img ?? ""
                        }`}
                        alt={data?.name ?? ""}
                        width={300}
                        height={300}
                        className="h-96 object-contain shadow-sm"
                    />
                </div>
            </div>
    )
}