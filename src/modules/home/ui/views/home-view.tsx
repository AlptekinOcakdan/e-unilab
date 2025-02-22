import { Card } from "@/components/ui/card";
import {PreparatList} from "@/modules/home/ui/components/PreparatList";

export const HomeView = () => {
    return (
        <Card className="w-[80%] max-w-6xl mx-auto p-6 flex flex-col md:flex-row">
            <PreparatList />
            <div className="flex-1 flex flex-col justify-center px-8">
                <h1 className="text-3xl font-bold">Hoşgeldiniz</h1>
                <p className="mt-4 text-gray-700 w-[70%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                </p>
            </div>
        </Card>
    );
}