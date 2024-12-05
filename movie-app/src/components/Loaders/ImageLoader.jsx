import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = () => (
    <ContentLoader
        speed={3}
        width={228}
        height={280}
        viewBox={`0 0 228 280`}
        backgroundColor="#4d4d4d"
        foregroundColor="#d1d1d1"
    >
        <rect x="0" y="0" rx="10" ry="10" width="228" height="228" />
        <rect x="0" y="248" rx="10" ry="10" width="160" height="30" />
    </ContentLoader>
)

export default ImageLoader

