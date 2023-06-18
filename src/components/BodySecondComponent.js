import '../cssContainer/BodySecondComponent.css';
function BodySecondComponent(){
    const advertisements =['Cricket', 'Sprint', 'Vo', 'Verizon', 'at&t', 'metroPCS', 'Verizon', 'GpA&T'];
return(
    <div className="bodySecondCompContainer">

        <span>{advertisements[0]}</span>
        <span>{advertisements[1]}</span>
        <span>{advertisements[2]}</span>
        <span>{advertisements[3]}</span>
        <span>{advertisements[4]}</span>
        <span>{advertisements[5]}</span>
        <span>{advertisements[6]}</span>
        <span>{advertisements[7]}</span>
    </div>
);
}
export default BodySecondComponent;