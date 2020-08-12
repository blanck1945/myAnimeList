import * as Yup from "yup"

export const anime = {
    title: "",
    year: "",
    season: "",
    type: "",
    episodes: 0,
    licensor: "",
    genres: "",
    first: "",
    last: "",
    studio: "",
    source: "",
    img: "",
    adaptation: "",
    prequel: ""
}

export const animeSchema = Yup.object({
    title: Yup.string().required("Required").trim(),
    year: Yup.number().required("Required"),
    season: Yup.string().required("Required").trim(),
    type: Yup.string().required("Required").trim(),
    episodes: Yup.number(),
    licensor: Yup.string().required("Required").trim(),
    genres: Yup.string().required("Required").trim(),
    first: Yup.string().required("Required").trim(),
    last: Yup.string().required("Required").trim(),
    studio: Yup.string().required("Required").trim(),
    source: Yup.string().required("Required").trim(),
    img: Yup.string().required("Required"),
    adaptation: Yup.string().required("Required").trim(),
    prequel: Yup.string().required("Required").trim()
})