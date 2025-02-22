import Link from "next/link";
import {Button} from "../components/ui/button";


export default function Page() {
    return (
        <section className="flex flex-col justify-center items-center mt-10 md:mt-20 lg:mt-32 xl:mt-36">
           <Button> <Link href={"/newMemory"}>new memory</Link></Button>
        </section>
    )
}