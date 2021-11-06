import React from "react";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2 className='text-center text-info'>Sistem Informasi E-biz</h2>
        {/* <Card>
          <p>Ini adalah tulisan</p>
        </Card> */}
        <Input />
      </div>
    );
  }
  // render(){
  //     return(
  //         <div>
  //             <h2>Title Home Component</h2>
  //             <p>Hello my name is {this.props.name}</p>
  //         </div>
  //     );
  // }
}
