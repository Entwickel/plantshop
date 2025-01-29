function CareScale(props) {
    const scaleValue = props.scaleValue

    const range = [1,2,3]
    //permet d'afficher autant de soleil que la valeur scale
    return (<div>
        {range.map((rangeElem) =>
        scaleValue >= rangeElem ? <span
            key={rangeElem.toString()}>☀️
        </span> : null
        )
    }
        </div>
    )    
}
export default CareScale
