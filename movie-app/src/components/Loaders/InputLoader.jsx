import React from "react"
import ContentLoader from "react-content-loader"

const InputLoader = () => (
    <div className="input-field">
        <ContentLoader
            speed={2}
            width={450}
            height={70}
            viewBox="0 0 450 70"
            backgroundColor="#4d4d4d"
            foregroundColor="#5d5d5d"

        >
            <rect x="0" y="29" rx="6" ry="6" width="440" height="40" />
            <rect x="0" y="0" rx="6" ry="6" width="105" height="21" />
        </ContentLoader>
    </div>
)

export default InputLoader

