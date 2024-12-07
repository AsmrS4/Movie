import React from "react"
import ContentLoader from "react-content-loader"

const PaginationLoader = () => (
  <ContentLoader 
    speed={2}
    width={40}
    height={40}
    viewBox="0 0 40 40"
    backgroundColor="#4d4d4d"
    foregroundColor="#5d5d5d"

  >
    <rect x="0" y="0" rx="4" ry="4" width="40" height="40" />
  </ContentLoader>
)

export default PaginationLoader
