import { FROM } from "src/components";
import { initialValues, submit, validation } from "./formSchema";

export default function SignInPage() {

    return <FROM initialValues={initialValues} validation={validation} submit={submit} />

}