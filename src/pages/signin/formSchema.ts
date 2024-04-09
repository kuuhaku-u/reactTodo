export const initialValues = { email: '', password: '' }
export const validation = (values: any) => {

    const errors: any = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors

}
export const submit = (values: any) => {
    // setTimeout(() => {
    //     alert(JSON.stringify(values, null, 2));
    // }, 400);
    localStorage.setItem("token", "AUTH")
}