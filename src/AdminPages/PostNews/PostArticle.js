import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useSelector, useDispatch } from 'react-redux'
import { articleSchema } from "./ArticlesModelValidation/YupValidation"
import { article } from "./ArticlesModelValidation/ArticleModel"
import { postArticle } from '../../Store/AdminActions/PostNewsActions'
import ErrorDiv from './ErrorDiv/ErrorDiv'

import "../AdminScss/PostNews/PostNews.scss"

const PostArticle = () => {

    const dispatch = useDispatch()
    const { logUser } = useSelector(state => state.log)
    const { username, id } = logUser[0]

    return (
        <Formik initialValues={{ ...article, author: username }} validationSchema={articleSchema}
            onSubmit={values => dispatch(postArticle(values, id))} className="addFormDiv">
            <Form className="addPosting">
                <div className="formHeader">
                    <h3 className="formTitle">Post Article</h3>
                </div>
                <div className="postingCenter">
                    <div className="postingHeader">
                        <div className="headerInputs">
                            <div className="inputSide">
                                <label htmlFor="author">Author</label>
                                <Field type="text" value={username} className="generalInputs" disabled
                                    name="author" placeholder="Author" />
                                <label htmlFor="title">Title</label>
                                <Field type="text" className="generalInputs"
                                    name="title" placeholder="Title" />
                                <ErrorMessage name="title" component={ErrorDiv} />
                            </div>
                            <div className="inputSide">
                                <label htmlFor="title">Spoiler</label>
                                <Field type="text" className="generalInputs"
                                    name="spoiler" placeholder="Spoiler" />
                                <ErrorMessage name="spoiler" component={ErrorDiv} />
                                <label htmlFor="source">related</label>
                                <Field type="text" className="generalInputs"
                                    name="related" placeholder="Related" />
                                <ErrorMessage name="related" component={ErrorDiv} />

                            </div>
                        </div>
                    </div>
                    <div className="postingSide">
                        <h4>Enter Text</h4>
                        <Field as="textarea" name="text" id="" cols="30" rows="10" />
                        <ErrorMessage name="text" component={ErrorDiv} />
                    </div>
                    <div className="postingImg">
                        <label htmlFor="title">Img (optional)</label>
                        <Field type="text" className="generalInputs"
                            name="img" placeholder="Image" />
                    </div>
                    <button type="submit">Post News</button>
                </div>
            </Form>
        </Formik>
    )
}

export default PostArticle

//"generalInputs requiredBorder"