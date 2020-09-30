import React from "react"

const BlogPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS()
  return <div> hello blog</div>
}

export default BlogPreview
