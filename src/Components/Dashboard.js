class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      isDropdown: false,
      isIn: false,
      areaexpanded: false
    };
  }
  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked, isIn: !this.state.isIn });
  };
  handleDropdown = () => {
    this.setState({ isDropdown: !this.state.isClicked });
  };
  expandMenu = () => {
    this.setState({ areaexpanded: !this.state.areaexpanded });
  };
  render() {
    const { children, ...rest } = this.props;
    const toggleClassName = this.state.isClicked ? 'active' : '';
    const toggleClassNameIn = this.state.isClicked ? 'in' : '';
    const toggledropdown = this.state.areaexpanded
      ? 'dropdown-toggle'
      : 'dropdown-toggle collapsed';
    const toggledUlropdown = this.state.areaexpanded
      ? 'list-unstyled collapse'
      : 'list-unstyled collapse show';
    const areaExpanded = this.state.areaexpanded ? true : false;
    return (
      <div className='wrapper'>
        <nav id='sidebar' className={toggleClassName}>
          <div className='sidebar-header'>
            <h3 style={{ textAlign: 'center' }}>Collectorate Botad</h3>
          </div>

          <ul className='list-unstyled components'>
            <p>Welcom, User</p>
            <li className='active'>
              <a
                href='#homeSubmenu'
                data-toggle='collapse'
                aria-expanded={areaExpanded}
                className={toggledropdown}
                onClick={this.expandMenu}
              >
                Masters
              </a>
              <ul className={toggledUlropdown} id='homeSubmenu'>
                <li>
                  <Link to='/Menu/Taluka'>Taluka</Link>
                </li>
                <li>
                  <Link to='/Menu/Office'>Office</Link>
                </li>
                <li>
                  <a href='#'>Home 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a
                href='#pageSubmenu'
                data-toggle='collapse'
                aria-expanded='false'
                className='dropdown-toggle'
              >
                Pages
              </a>
              <ul className='collapse list-unstyled ' id='pageSubmenu'>
                <li>
                  <a href='#'>Page 1</a>
                </li>
                <li>
                  <a href='#'>Page 2</a>
                </li>
                <li>
                  <a href='#'>Page 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'>Portfolio</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
        <div style={{ width: '100%' }}>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div>
              <button
                type='checkbox'
                checked
                data-toggle='toggle'
                data-onstyle='primary'
                id='sidebarCollapse'
                className='btn btn-info'
                onClick={this.handleClick}
              >
                <span className='sr-only'>Toggle Sidebar</span>
              </button>
            </div>
          </nav>
        </div>
        <div>{children}</div>
      </div>
    );
  }
}
