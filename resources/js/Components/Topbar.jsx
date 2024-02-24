import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Link, usePage } from '@inertiajs/react';
import DropdownDivider from 'react-bootstrap/esm/DropdownDivider';


export default function Topbar()  {
    const { auth } = usePage().props;

//   render() {
    return (
      <>        
    <Navbar expand="lg" className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* <Container className="navbar-nav" > */}
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
      {/* <Navbar.Collapse id="basic-navbar-nav">  */}
          <Nav className="navbar-nav ml-3" >
              <Nav.Link className="nav-link" data-widget="pushmenu" href="#" role="button" >
                  <i className="fas fa-bars"></i>
                  </Nav.Link>
              <Nav.Link href={route('dashboard')} active={route().current('dashboard')} className="nav-link">Home</Nav.Link>
              <Nav.Link href={route('profile.edit')} active={route().current('profile.edit')}>Contact</Nav.Link>

              </Nav>  
              <Nav className="navbar-nav ml-auto mr-5" >
                <Nav.Item as="li" >
                <Nav.Link data-widget="navbar-search" href="#" role="button" >
                    <i className="fas fa-search"></i>
                </Nav.Link>
                <div className="navbar-search-block">
                        <Form className="form-inline">
                        <InputGroup className="input-group-sm" >
                            <Form.Control 
                                className="form-control-navbar" 
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                />
                        <Button className="btn-navbar" type="submit" >
                                <i className="fas fa-search"></i>
                            </Button  >
                            <Button className="btn-navbar" type="button" data-widget="navbar-search" >
                                <i className="fas fa-times"></i>
                            </Button  >
                        </InputGroup>
                       </Form>
                    </div>
                </Nav.Item>

                <Dropdown as="li" align="end" >
                <Dropdown.Toggle className="text-dark bg-white border-white " bsPrefix="x" >
                    <i className="far fa-comments" ></i>
                    <Badge bg="danger" >3</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu  >
                    <Dropdown.Item href="#" className="dropdown-menu-lg" >
                    <div className="media">
                    <img src="storage/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                    <div className="media-body">
                        <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                        </h3>
                        <p className="text-sm">Call me whenever you can...</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                    </div>
                    </Dropdown.Item>
                    <DropdownDivider/>
                    <Dropdown.Item href="#" className="dropdown-menu-lg" >
                    <div className="media">
                    <img src="storage/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                    <div className="media-body">
                        <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                        </h3>
                        <p className="text-sm">I got your message bro</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                    </div>
                    </Dropdown.Item>
                    <DropdownDivider/>

                    <Dropdown.Item href="#" className="dropdown-menu-lg" >
                    <div className="media">
                    <img src="storage/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                    <div className="media-body">
                        <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                        </h3>
                        <p className="text-sm">The subject goes here</p>
                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                    </div>
                    </Dropdown.Item>
                    <DropdownDivider/>

                    <Dropdown.Item href="#" className="dropdown-footer text-center">See All Messages</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>                

                <Dropdown as="li" align="end" >
                <Dropdown.Toggle className="text-dark bg-white border-white " bsPrefix="x" >
                    <i className="far fa-bell" ></i>
                    <Badge bg="warning" >15</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu  >
                    <Dropdown.Item href="#" className="dropdown-menu-lg"  >
                    <i class="fas fa-envelope mr-2"></i> 4 new messages
                    <span class="float-right text-muted text-sm">3 mins</span>
                    </Dropdown.Item>
                    <DropdownDivider/>
                    <Dropdown.Item href="#" className="dropdown-menu-lg"  >
                    <i class="fas fa-users mr-2"></i> 8 friend requests
                    <span class="float-right text-muted text-sm">12 hours</span>
                    </Dropdown.Item>
                    <DropdownDivider/>

                    <Dropdown.Item href="#" className="dropdown-menu-lg" >
                    <i class="fas fa-file mr-2"></i> 3 new reports
                    <span class="float-right text-muted text-sm">2 days</span>
                    </Dropdown.Item>
                    <DropdownDivider/>

                    <Dropdown.Item href="#" className="dropdown-footer text-center">See All Notifications</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>                

              <NavDropdown title={auth.user.name} align="end">
              <NavDropdown.Item href={route('profile.edit')}>
                  <i className="fa fa-user"></i>&nbsp;&nbsp;Profile
                  </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.ItemText className="hover-bg-red" >
                  <Link method="post" href={route('logout')} as="button" ><i className="fa fa-sign-out"></i> Logout</Link>
              </NavDropdown.ItemText>
              </NavDropdown>
          </Nav>
          {/* </Navbar.Collapse> */}
      {/* </Container> */}
      </Navbar>
      </>
    )
//   }
}
