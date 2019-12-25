import * as React from 'react'

interface Props {
    _id:string;
    name:string;
    age:string;
}

class UsersInfo extends React.Component<Props,any>{
    render(){
        return(
            <React.Fragment>
                ID пользователя: {this.props._id}<br/>
                Имя пользователя: {this.props.name}<br />
                Возраст пользователя: {this.props.age}<br />
            </React.Fragment>
        )
    }
}

export default UsersInfo;