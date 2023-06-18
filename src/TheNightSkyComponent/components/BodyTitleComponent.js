import BlurredBackgroundCard from './BlurredBackgroundCard';
function BodyTitleComponent(){
    return(
        <div className="bodyTitleContainer">
            <div className="title">The Night Sky</div>
            <div className="titleDescription">Beyond The Naked Eye</div>
            <div className="titleButtons">
            <BlurredBackgroundCard data="GET STARTED"/>
            <BlurredBackgroundCard data = "LEARN MORE" className="titleButtonLearn" />
            </div>
        </div>
    );
}

export default BodyTitleComponent;