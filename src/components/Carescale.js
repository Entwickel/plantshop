function CareScale({scaleValue, careType}) {
    const range = [1,2,3]

    const scaleType = careType === 'light' ? '☀️' : '💧'
    //permet d'afficher autant de soleil que la valeur scale
    return (<div>
        {range.map((rangeElem) =>
        scaleValue >= rangeElem ? <span
            key={rangeElem.toString()}>{scaleType}
        </span> : null
        )
    }
        </div>
    )    
}
export default CareScale
