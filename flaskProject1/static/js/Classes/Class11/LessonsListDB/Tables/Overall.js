class DBList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    Liked(){
            const likeBtn = document.querySelector(".like__btn");
            let likeIcon = document.querySelector("#icon"),
              count = document.querySelector("#count");

            let clicked = false;


            likeBtn.addEventListener("click", () => {
              if (!clicked) {
                clicked = true;
                likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
                count.textContent++;
              } else {
                clicked = false;
                likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
                count.textContent--;
              }

            });
    }
   
    render() {
        return (
            <>
            <h1>Таблици</h1>

            <div id = "video_exercise">
                <h2>Видео  Урок:</h2>

                <a href="#Test" id="test_button">Тест върху материала</a>

                <iframe width="960" height="540" src="https://www.youtube.com/embed/L3kmtBhmXOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
                 clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen></iframe>

                <button className="like__btn" onClick={this.Liked}>
                    <span id="icon"><i className="far fa-thumbs-up"></i></span>
                    <span id="count">0</span> Like
                </button>

                {/*<script src="/home/kris/Desktop/ElsysLearn/flaskProject1/static/js/button.js"></script>*/}
                <div id="upr">
                    <h2> Упражнение:</h2>

                    <div id="Test">

                    </div>
                </div>
            </div>
            </>
        )
    }
}