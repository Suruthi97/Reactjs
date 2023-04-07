import { useEffect,useState } from 'react';
import {Link, useNavigate} from 'react-router';
import axios from 'axios';


export default function ProfileDetails() {

    const[getList,setList] = useState([]);
    const[getSearch,setSearch]=useState('');
  
  
    const onChangeSearchHandler=(event)=>{
      setSearch(event.target.value);
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/profileDetails').then((response)=>{
          console.log(response.data)
          setList(response.data);
      }).catch((error)=>{
        console.log(error);
      })
    },[])

    //delete item from table when delete icon clicked
    const onDeleteHandler=(index)=>{
      let profileDetails = [...getList];
      let id = profileDetails[index].id;
      axios.delete('http://localhost:3000/profileDetails/'+id).then((response)=>{
        profileDetails.splice(index,1);
       setList(profileDetails);
      }).catch(()=>{
      })   
    }

    return(<div>
        <table className="table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>UserName</th>
                    <th>About</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Postal</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {getList.map((obj,index)=>{
                            return(<tr key={index}>  
                            <td>{obj.id}</td>                                                      
                            <td>{obj.userName}</td>
                            <td>{obj.about}</td>
                            <td>{obj.firstName}</td>
                            <td>{obj.lastName}</td>
                            <td>{obj.email}</td>
                            <td>{obj.country}</td>
                            <td>{obj.street}</td>
                            <td>{obj.city}</td>
                            <td>{obj.state}</td>
                            <td>{obj.postal}</td> 
                            <td><svg xmlns="http://www.w3.org/2000/svg" onClick={()=>onDeleteHandler(index)} width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                              </svg>
                            </td>                          
                          </tr>)
                    })}   
            </tbody>
        </table>

    </div>);
}