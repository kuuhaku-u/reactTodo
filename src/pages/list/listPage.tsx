
import { HEADING, IMPUREHEADING } from "src/components";
import { TEST_URL } from "src/constants/constant";
import { useFetch } from "src/hooks/fetch/fetch";



export default function HomePage() {

    const data = useFetch(TEST_URL)



    return <>

        <h1>
            List Page
        </h1>
        <HEADING label="Impure Comp (Check the logs)" count={0} />
        <IMPUREHEADING label="Impure Comp (Check the logs)" count={0} />

        <ul>
            {data?.length > 0 && data.map((todo: any) => (
                <li>
                    {(todo as any).title}
                </li>
            ))}

        </ul>
    </>
}
