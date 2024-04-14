import {ZodType} from "zod";

export function formikContract<D>(data: ZodType<D>) {
    return <V>(values: V) => {
        const errors: Record<string, string> = {}

        const parsed = data.safeParse(values)

        if (parsed.success) {
            return errors
        }
        // @ts-ignore
        parsed.error.errors.forEach((e) => {
            e.path.forEach((path) => {
                errors[path] = e.message
            })
        })

        return errors
    }
}