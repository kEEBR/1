import * as React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css";

interface Props {
  name: string;
  login: string;
}
interface State {
  users: any;
}
function format(cell, row) {
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}
var selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  bgColor: "rgb(238, 193, 213)"
};
class FavouritesUsers extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <h2 className='faveText'>Избранные пользователи</h2>
        <BootstrapTable
        className="Table"
          data={this.props.login}
          selectRow={selectRowProp}
          striped
          hover
          condensed
          pagination
          insertRow
          deleteRow
          search
        >
          <TableHeaderColumn dataField='id' isKey dataAlign='right' dataSort>
            Login
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField='price'
            dataAlign='center'
            dataFormat={format}
          >
            Followers
          </TableHeaderColumn>
        </BootstrapTable>
      </React.Fragment>
    );
  }
}

export default FavouritesUsers;
