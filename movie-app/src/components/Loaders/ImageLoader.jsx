import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = ({ imgHeight = 228, imgWidth = 280 }) => (
    <ContentLoader
        speed={3}
        width={imgWidth}
        height={imgHeight}
        viewBox={`0 0 ${imgHeight} ${imgWidth}`}
        backgroundColor="#4d4d4d"
        foregroundColor="#d1d1d1"
    >
        <rect x="0" y="0" rx="4" ry="4" width="228" height="228" />
        <rect x="0" y="248" rx="4" ry="4" width="228" height="30" />
    </ContentLoader>
)

export default ImageLoader

