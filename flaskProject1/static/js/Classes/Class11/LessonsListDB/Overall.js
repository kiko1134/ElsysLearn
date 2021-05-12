class DBList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <h1>Бази дани</h1>
                <h2>Уроци по Бази дани:</h2>
                <br/>
                <br/>
                <div id="sub">
                    <div id="border">
                        <br/>
                        <a id="a" href="/OverallDB1"> Въведение в SQL</a>
                    </div>
                    <div id="border">
                        <br/>
                        <a href="/OverallDB2"> Създаване на таблици</a>
                    </div>
                    <div id="border">
                        <br/>
                        <a id="a" href="/OverallDB3"> Основни заявки</a>
                    </div>
                    <div id="border">
                        <br/>
                        <a id="a" href="/OverallDB4">Основни агрегатни функции</a>
                    </div>
                    <div id="border">
                        <br/>
                        <a id="a" href="/OverallDB5"> Създаване на връзки между таблици</a>
                    </div>
                    <div id="border">
                        <br/>
                        <a href="/OverallDB6"> Джойн заявки </a>
                    </div>
                </div>
            </>
        )
    }
}