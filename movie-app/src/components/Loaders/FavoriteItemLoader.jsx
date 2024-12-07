import React from "react"
import ContentLoader from "react-content-loader"

const FavoriteItemLoader = () => (
  <ContentLoader 
    speed={2}
    width={900}
    height={150}
    viewBox="0 0 900 150"
    backgroundColor="#4d4d4d"
    foregroundColor="#5d5d5d"

  >
    <rect x="0" y="0" rx="6" ry="6" width="120" height="150" /> 
    <rect x="130" y="0" rx="6" ry="6" width="140" height="28" /> 
    <rect x="130" y="48" rx="6" ry="6" width="76" height="18" /> 
    <rect x="130" y="75" rx="6" ry="6" width="76" height="18" /> 
    <rect x="130" y="102" rx="6" ry="6" width="76" height="18" />
  </ContentLoader>
)

export default FavoriteItemLoader

