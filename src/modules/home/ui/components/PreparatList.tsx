import * as React from "react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const preparatlar = [
    { id: "1", title: "Preparat 1" },
    { id: "2", title: "Preparat 2" },
    { id: "3", title: "Preparat 3" },
    { id: "4", title: "Preparat 4" },
    { id: "5", title: "Preparat 5" },
    { id: "6", title: "Preparat 6" },
    { id: "6", title: "Preparat 6" },
    { id: "6", title: "Preparat 6" },
    { id: "6", title: "Preparat 6" },
    { id: "6", title: "Preparat 6" },
    { id: "6", title: "Preparat 6" },
    { id: "6", title: "Preparat 6" },
    { id: "6", title: "Preparat 6" },
    { id: "6", title: "Preparat 6" },
    { id: "6", title: "Preparat 6" },
    { id: "6", title: "Preparat 6" },
    { id: "6", title: "Preparat 6" },
    { id: "7", title: "Preparat 7" }
];

export const PreparatList = () => {
    return (
        <div className="flex-1 flex items-center flex-col px-8 py-4">
            <h2 className="text-2xl font-semibold">Preparatlar</h2>
            <p className="text-sm text-gray-500 mb-4">Preparat seçiniz</p>

            <ScrollArea className="w-96 rounded-md border">
                <div className="h-96 p-2">
                    <div className="h-1"/>
                    {preparatlar.map((prep) => (
                        <>
                            <Link href={`/preparat/${prep.id}`}>
                                <Button asChild variant="outline" className="my-1 w-full">
                                    <span className="text-sm">{prep.title}</span>
                                </Button>
                            </Link>
                        </>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};
