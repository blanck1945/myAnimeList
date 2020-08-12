import * as Yup from "yup"

export const articleSchema = Yup.object({
    title: Yup.string().required("Required").trim(),
    spoiler: Yup.boolean().required("Required"),
    related: Yup.string().required("Required").trim(),
    img: Yup.string().notRequired(),
    text: Yup.string().required("Required")
})

export const newsSchema = Yup.object().shape({
    title: Yup.string().required("Required").trim()
})