import React from "react";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      status: "",
    };
  }
  render() {
    return (
      <div>
        <h2 className='text-center text-info'>Sistem Informasi E-biz</h2>
        <div>
          <Input
            getValues={(name, value) => this.setState({ [name]: value })}
          />
          <Card nama={this.state.nama}>
            <p>{this.state.status}</p>
          </Card>
          {/* <Card nama={this.state.nama}></Card> */}
        </div>
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
