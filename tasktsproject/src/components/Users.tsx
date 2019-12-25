import * as React from "react";
import UsersInfo from "./UserInfo";

interface Props {
  name: string;
  usersS: any;
}

class Users extends React.Component {
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        {this.props.usersS.map(function(users) {
          return (
            <UsersInfo _id={users._id} name={users.name} age={users.age} />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Users;
