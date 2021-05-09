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

            <div id = "video_exercise">
                <h2>Видео  Урок:</h2>

                <a href="#Test" id="test_button">Тест върху материала</a>

                <iframe width="960" height="540" src="https://www.youtube.com/embed/L3kmtBhmXOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                 clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen></iframe>
                 
                <h2> Упражнение:</h2>

                <div id="Test">

                </div>
            </div>
            </>
        )
    }
}