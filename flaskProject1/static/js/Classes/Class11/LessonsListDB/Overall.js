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
                        <a id="a" href="/Overall"> Въведение в SQL</a>
                    </div>
                    <div id="border">
                        <br/>
                        <a href="/"> Създаване на таблици</a>
                    </div>
                    <div id="border">
                        <br/>
                        <a id="a" href="/"> Основни агрегатни функции </a>
                    </div>
                    <div id="border">
                        <br/>
                        <a id="a" href="/">Основни заявки</a>
                    </div>
                    <div id="border">
                        <br/>
                        <a id="a" href="/"> Създаване на връзки между таблици</a>
                    </div>
                    <div id="border">
                        <br/>
                        <a href="/"> Джойн заявки </a>
                    </div>
                </div>
            </>
        )
    }
}