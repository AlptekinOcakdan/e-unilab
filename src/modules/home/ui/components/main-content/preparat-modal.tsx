import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";

import {useIsMobile} from "@/hooks/use-mobile";
import {Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle} from "@/components/ui/drawer";
import Link from "next/link";
import {Button} from "@/components/ui/button";

interface PreparatModalProps {
    preparatId: string;
    preparatName: string;
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
}

export const PreparatModal = ({preparatId, preparatName, isModalOpen, setIsModalOpen}: PreparatModalProps) => {
    const isMobile = useIsMobile();
    if (!isMobile){
        return (
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-fit">
                    <DialogHeader>
                        <DialogTitle>{preparatName}</DialogTitle>
                        <DialogDescription>Preparatla ilgili görüntülemek istediğiniz sayfayı seçin lütfen</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-wrap items-center justify-center flex-row gap-4">
                        <Link href={`/${preparatId}/plain`}><Button>Sade Preparat</Button></Link>
                        <Link href={`/${preparatId}/informed`}><Button>Etkileşimli Preparat</Button></Link>
                        <Link href={`/${preparatId}/article`}><Button>Preparat&apos;ın detaylı bilgisi</Button></Link>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={isModalOpen}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>{preparatName}</DrawerTitle>
                    <DrawerDescription>Preparatla ilgili görüntülemek istediğiniz sayfayı seçin lütfen</DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-wrap items-center justify-center flex-row gap-4">
                    <Link href={`/${preparatId}/plain`}><Button>Sade Preparat</Button></Link>
                    <Link href={`/${preparatId}/informed`}><Button>Etkileşimli Preparat</Button></Link>
                    <Link href={`/${preparatId}/article`}><Button>Preparat&apos;ın detaylı bilgisi</Button></Link>
                </div>
            </DrawerContent>
        </Drawer>
    )
}