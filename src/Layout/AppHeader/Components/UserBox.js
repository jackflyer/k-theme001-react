import React, { Fragment } from 'react';

import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledTooltip
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import avatar1 from '../../../assets/images/avatars/1.jpg';

class UserBox extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="header-btn-lg pr-0">
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left">
                <UncontrolledButtonDropdown>
                  <DropdownToggle color="" className="p-0">
                    <img
                      width={42}
                      className="rounded-circle"
                      src={avatar1}
                      alt=""
                    />
                    <FontAwesomeIcon
                      className="ml-2 opacity-8"
                      icon={faAngleDown}
                    />
                  </DropdownToggle>
                  <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                    <Nav vertical>
                      <NavItem className="nav-item-header">Activity</NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Chat
                          <div className="ml-auto badge badge-pill badge-info">
                            8
                          </div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Recover Password
                        </NavLink>
                      </NavItem>
                      <NavItem className="nav-item-header">My Account</NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Settings
                          <div className="ml-auto badge badge-success">New</div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">
                          Messages
                          <div className="ml-auto badge badge-warning">512</div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="javascript:void(0);">Logs</NavLink>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>

              <div className="widget-content-left  ml-3 header-user-info">
                <div className="widget-heading">kdevsoftware</div>
                <div className="widget-subheading">Full Stack Developer</div>
              </div>

              <div className="widget-content-right header-user-info ml-3">
                <Button
                  className="btn-shadow p-1"
                  size="sm"
                  onClick={this.notify2}
                  color="info"
                  id="Tooltip-1"
                >
                  <FontAwesomeIcon className="mr-2 ml-2" icon={faCalendarAlt} />
                </Button>
                <UncontrolledTooltip placement="bottom" target={'Tooltip-1'}>
                  Click for Toastify Notifications!
                </UncontrolledTooltip>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UserBox;
