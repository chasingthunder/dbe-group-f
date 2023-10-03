import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { Skeleton } from "@/components/ui/skeleton";


export default async function Loading() {
    const data = Array(3).fill({})

    return (
        <>
            <NavBar active={"quadro"} />

            <main className="bg-teal-600 mt-10 m-auto max-w-lg p-8 rounded">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl">Notas</h1>
                    <Button href="/quadro/new" >
                        <PlusIcon className="h6 w-6" />
                        criar nota
                    </Button>
                </div>

                <div id="data">
                    {data.map(() => {
                        return (
                            <div id="data-row" className="group flex justify-between items-center p-2 my-1 rounded cursor-pointer hover:bg-teal-700">
                                <div className="flex gap-2">
                                    <Skeleton className="h-7 w-6 bg-teal-600 rounded-full" />
                                    <Skeleton className="h-7 w-32 bg-teal-600" />
                                </div>
                                <div className="flex items-center">
                                    <Skeleton className="h-7 w-10 bg-teal-600" />
                                </div>
                            </div>
                        )
                    })}
                </div>

            </main>
        </>

    )
}
