import React  from 'react';
import './App.css';
    class Home extends React.Component {
        constructor(props) {
            super(props)
    
            this.state = {
                items: [],
                error: '',
                email:'',
                phone:'',
                companyName:''
            }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.showUserEmail = this.showUserEmail.bind(this);
        }
    
        handleInputChange(event){
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
        
            this.setState({
              [name]: value
             
            });
          }
        handleSelectUserName = (event) => {
            console.log(event.target.value);
            const myUser = (event.target.value);
            this.setState({ name: event.target.value });
            const selectedUser= event.target.value;
          }
          handleSelectNewUser = (event) =>{
              console.log(event.target.value);
          }
          showUserEmail=(e)=>{
              console.log("you are clicking name" );
              this.setState({
    
              })
    
          }
          componentDidMount() {
            fetch("https://jsonplaceholder.typicode.com/users")
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
                console.warn(result);
                this.setState({ items: result });
              });
          }
        
          
    
      render() {
          const { items } = this.state
          return (
         
              <div>
                  <h2> Home Page</h2>
                  <button className="btn"> Show new User</button>  
                  <div className="new-user" 
                        onChange={event => this. handleSelectNewUser(event)}>
                          {this.state.items.map(items => (
                          <span key={items.name} value={items.name}>
                         {items.name} <p></p></span>))}
            </div>
                  <p className="para-text"> Data from API</p>
    
    
                <div className="user-info">
                  {
                     items.length ?
                     items.map(items => <div key ={ items.id }> 
                      <div className="user-details"> {items.name} </div>
                      <div className="user-details">{items.phone}</div> 
                       <div className="user-details">{items.company.name}</div>
    
                        <div className="user-details">{items.username}</div>
                      <div className="user-details">{items.email}</div>
                      <div className="user-details">{items.website}</div>
                     
                      </div>) : null
                  }
                </div>
               
                
                  <h2>Find User By Username</h2>
    
                  <div className="input-box">
                          <select onChange={event => this.handleSelectUserName(event)}>
                          {this.state.items.map(items => (
                          <option key={items.name} value={items.name}>
                              {items.username}
                            </option>
                          ))}
                        </select>
                        
                        {/* Auto select */}
                   <div className=" Show-User-Auto">    
                        <div className="input-box">
                            <input type="text"
                            placeholder=" Auto Select"
                            required="required"
                            onChange={event => this.handleInputChange(event)}
                            value={this.state.name} />
                        </div>
                    </div>    
                  
                      
              </div>
            
              <div className="footer"></div>
        </div>
          );
      }
    }
    export default Home;