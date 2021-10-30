
const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'rgb(255, 255, 255)', display: 'block', shapeRendering: 'auto'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="25" strokeWidth="5" stroke="#d82531" strokeDasharray="39.269908169872416 39.269908169872416" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="2s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
            <circle cx="50" cy="50" r="19" strokeWidth="5" stroke="#a39c95" strokeDasharray="29.845130209103033 29.845130209103033" strokeDashoffset="29.845130209103033" fill="none" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" dur="2s" repeatCount="indefinite" keyTimes="0;1" values="0 50 50;-360 50 50"></animateTransform>
            </circle>
        </svg>
    )
}

export default Spinner;