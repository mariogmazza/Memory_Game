// import React,{Component} from "react"
// import API from "../../utils/API";


// const Input =(props)=>{
// return (
//                 <div>
// 		<input 
//                 name={props.name} 
//                 /* autoComplete="false" required  */
//                 value={props.value}
//                 type={props.type}  
//                 placeholder={props.placeholder}
//                 onChange={props.onChange}
//                 />	

// 				<label htmlFor={props.name}>{props.name}</label>
// 			</div>
// 		)
	
// }

// const Form =(props)=>{
	
// 		return (

// 	<div>
    
//           <div className="control-group">
//             <div className="form-group floating-label-form-group controls">
//                <Input {... props}/>  
//                    <p className="help-block text-danger"></p>
//             </div>
//           </div>

                        
//     </div>          

// 		)
//     }

// class LoginForm extends Component {
// 	constructor(props){
//     super(props)

// 	this.state= {
//     username:"",
//     password:"",
//     currentUser:""
//     }
//     this.handleFormSubmit=this.handleFormSubmit.bind(this)
//     this.handleInputChange=this.handleInputChange.bind(this)
    
// }
	
//     componentWillMount() {
//         API.logout()
//         .catch(err => console.log(err))
//     }

    
    
//     handleInputChange = event => {
//         const { name, value } = event.target;
//         this.setState({
//           [name]: value
//         });
//       };
	
// 	handleFormSubmit=(e)=> {
//         e.preventDefault()
//         if (this.state.username && this.state.password) {
//             API.login({
//                 username: this.state.username,
//                 password: this.state.password
//               })
//                 .then(res => {
//                   if (res.data.user) {
//                     this.props.history.push('/scores/'+res.data.id);
//                   }
//                   else {
//                     console.log("no user");
//                   }
//                 })
//                 .catch(err => console.log(err));

//                 console.log("username: "+this.state.username+" "+"pass: "+this.state.password);
//           }
// 	}

// 	render() {

// 		return(
         
//             <section id="signup">
//             <div className="container">
//                 <h2 className="text-center">Welcome back Time Traveller</h2>
//                 <div className="row">
//                     <div className="col-lg-8 mx-auto">  
//                          <form onSubmit={this.state.onSubmit} className="myForm">

//             <Form name={'username'} type="text" placeholder="Super Mario"
//  onSubmit={this.handleSubmit} onChange={this.handleInputChange} value={this.state.username}   />

//             <Form name={'password'} type="password" placeholder="password (required)" 
// onSubmit={this.handleSubmit} onChange={this.handleInputChange} value={this.state.password}   />

//             <div className="form-group">
//             <button type="submit" className="btn btn-success btn-lg"  onClick={this.handleFormSubmit} id="sendInfo">Send</button>
//         </div>
//     </form>
// </div>
// </div>
// </div>
// </section>
        
// 		)
// 	}
// }

// export default LoginForm
