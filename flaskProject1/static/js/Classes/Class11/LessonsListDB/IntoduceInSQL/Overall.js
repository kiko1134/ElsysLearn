class DBList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

   
    render() {
        return (
            <>
            <h1>Въведение в SQL</h1>
                <h2>Видео  Урок:</h2>
                <br/>
                <br/>
            <div id = "video_exercise">                
                <video width="960" height="540" controls>
                    <source src="images/SampleVideo_1280x720_20mb.mp4" type="video/mp4"></source>                    
                </video>
                 
                <h2> Упражнение:</h2>

                <div id="Test">

                </div>
            </div>
            </>
        )
    }
}