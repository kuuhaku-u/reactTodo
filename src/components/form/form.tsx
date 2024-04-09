import { Formik, Field, ErrorMessage, Form } from "formik";

export default function CustomForm({ initialValues, validation, submit }: any) {


    return (
        <Formik
            initialValues={initialValues}
            validate={values => {
                validation(values)
            }}
            onSubmit={(values, { setSubmitting }) => {
                submit(values)
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}