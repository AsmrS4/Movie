import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = ({cardH = 360, cardW = 240}) => (
  <ContentLoader 
    speed={3}
    width={cardW}
    height={cardH}
    viewBox={`0 0 ${cardW} ${cardH}`}
    backgroundColor="#4d4d4d"
    foregroundColor="#d1d1d1"
  >
    <rect x="0" y="0" rx="4" ry="4" width="240" height="270" /> 
    <rect x="0" y="290" rx="4" ry="4" width="188" height="28" /> 
    <rect x="0" y="339" rx="4" ry="4" width="120" height="20" /> 
    <rect x="169" y="340" rx="4" ry="4" width="70" height="20" />
  </ContentLoader>
)

export default CardLoader

