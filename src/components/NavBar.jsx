import style from './../css/NavBar.css';
import mStyle from '../css/mobilePhone/NavBar.css';
export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: []
        }
    }
    componentDidMount() {
        const __this = this
        async function fetchNavList() {
            let data = await getNavList();
            data = JSON.parse(data).data
            __this.setState({
                navList: data
            })
        };
        fetchNavList()
    }

    render() {
        let navItems = [];
        let isPc=window.$store.getState().TYPE === "pc"
        this.state.navList.map((elem, index) => {
          navItems.push(<div className={isPc?style['nav-item']:mStyle['nav-item']}><Link to="/" key={`nav-${index}`}>{elem.name}</Link></div>);
        })
        if (isPc) {
            return (
                <nav className={style.nav}>
                    <div>
                        欢迎
                    </div>
                    {navItems}
                </nav>
            );
        } else {
            return (
                <nav className={mStyle.nav}>
                    {this.props.children}
                </nav>
            );
        }

    }
}
