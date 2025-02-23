"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {Fragment, useState} from "react";
import {PreparatModal} from "@/modules/home/ui/components/main-content/preparat-modal";

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
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [preparatId, setPreparatId] = useState("")
    const [preparatName, setPreparatName] = useState("")
    const handleClick = (id:string, name:string) => {
        setIsModalOpen(true);
        setPreparatId(id);
        setPreparatName(name);
    }
    return (
        <div className="flex-1 flex items-center flex-col px-8 py-4">
            <h2 className="text-2xl font-semibold">Preparatlar</h2>
            <p className="text-sm text-gray-500 mb-4">Preparat seçiniz</p>

            <ScrollArea className="w-96 rounded-md border">
                <div className="h-96 p-2">
                    <div className="h-1"/>
                    {preparatlar.map((prep, index) => (
                        <Fragment key={index}>
                            <Button asChild variant="outline" className="my-1 w-full cursor-pointer" onClick={()=> handleClick(prep.id, prep.title)}>
                                <span className="text-sm">{prep.title}</span>
                            </Button>
                        </Fragment>
                    ))}
                </div>
            </ScrollArea>
            {isModalOpen && <PreparatModal preparatId={preparatId} preparatName={preparatName} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
        </div>
    );
};
