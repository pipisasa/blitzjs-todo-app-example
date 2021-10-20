import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"
import { Field } from "react-final-form"

export function TodoForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField name="title" label="Title" placeholder="Learn Blitz..." />
      <div>
        <label htmlFor="#status">Status: </label>
        <Field id="status" component="select" name="status" placeholder="Status">
          <option />
          <option value="TODO">TODO</option>
          <option value="DOING">DOING</option>
          <option value="DONE">DONE</option>
        </Field>
      </div>
    </Form>
  )
}
