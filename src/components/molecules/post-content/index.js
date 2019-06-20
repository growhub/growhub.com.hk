import PropTypes from "prop-types"
import React from "react"
import rehypeReact from "rehype-react"
import EmbedPostCard from "@components/molecules/embed/post-card"
import styles from "./post-content.module.css"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "embed-post-card": EmbedPostCard },
}).Compiler

const PostContent = ({ post }) => {
  return (
    <div className={styles.content}>{renderAst(post.htmlAst)}</div>
  )
}
 

PostContent.propTypes = {
  post: PropTypes.object
}

PostContent.defaultProps = {
  post: null,
}


export default PostContent
