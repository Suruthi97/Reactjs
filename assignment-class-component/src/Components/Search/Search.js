import './Search.css';
import axios from 'axios';
import { Component } from 'react';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      search: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/library').then((response) => {
      console.log(response);
      this.setState({ list: response.data });
    }).catch((error) => {
      console.log(error);
    })
  }
  onChangeSearchHandler = (event) => {
    this.setState({ search: event.target.value });
  }
  searchFilter = (event) => {
    event.preventDefault();
    let details = this.state.list.filter((obj) => {
      return obj.title === this.state.search;
    })
    this.setState({ list: details });
  }
  resetFilter = (event) => {
    event.preventDefault();
    this.setState({ search: '' });
    axios.get('http://localhost:3000/library').then((response) => {
      console.log(response);
      this.setState({ list: response.data });
    }).catch((error) => {
      console.log(error);
    })
    // if (JSON.parse(sessionStorage.getItem('bookDetails')) && JSON.parse(sessionStorage.getItem('bookDetails')).length > 0) {
    //     setList(JSON.parse(sessionStorage.getItem('bookDetails')))
    // }
  }
  render(){
    return (<div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <form>
              <div><h2>Search Book</h2></div>
              <br />
              <label className="classlabel">Book Title: <input type="text" value={this.state.search} onChange={this.onChangeSearchHandler} id="bookName" name="searchbookName" /></label>
              <br />
              <button onClick={this.searchFilter} type="submit" className="btn btn-success2">Search</button>
              <button onClick={this.resetFilter} type="submit" className="btn btn-success3">Reset</button>
              <br /><br />
            </form>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Book ID</th>
              <th scope="col">Book Title</th>
              <th scope="col">Book Desc</th>
              <th scope="col">Author Name</th>
              <th scope="col">No.Of Book Available</th>
              <th scope="col">Purchase</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((obj, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{obj.title}</td>
                  <td>{obj.desc}</td>
                  <td>{obj.auth}</td>
                  <td>{obj.avail}</td>
                  <td>
                    <a href="" target="_blank" rel="noopener">Purchase</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>);
  }
}
// function Search() {
//   const [getList, setList] = useState([]);
//   const [getSearch, setSearch] = useState('');
//   useEffect(() => {
//     axios.get('http://localhost:3000/library').then((response) => {
//       console.log(response);
//       setList(response.data);
//     }).catch((error) => {
//       console.log(error);
//     })
//   }, [])
//   const onChangeSearchHandler = (event) => {
//     setSearch(event.target.value);
//   }
//   const searchFilter = (event) => {
//     event.preventDefault();
//     let details = getList.filter((obj) => {
//       return obj.title === getSearch;
//     })
//     setList(details);
//   }
//   const resetFilter = (event) => {
//     event.preventDefault();
//     setSearch('');
//     axios.get('http://localhost:3000/library').then((response) => {
//       console.log(response);
//       setList(response.data);
//     }).catch((error) => {
//       console.log(error);
//     })
//     // if (JSON.parse(sessionStorage.getItem('bookDetails')) && JSON.parse(sessionStorage.getItem('bookDetails')).length > 0) {
//     //     setList(JSON.parse(sessionStorage.getItem('bookDetails')))
//     // }

//   }
//   return (<div>
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-3">
//           <form>
//             <div><h2>Search Book</h2></div>
//             <br />
//             <label className="classlabel">Book Title: <input type="text" value={getSearch} onChange={onChangeSearchHandler} id="bookName" name="searchbookName" /></label>
//             <br />
//             <button onClick={searchFilter} type="submit" className="btn btn-success2">Search</button>
//             <button onClick={resetFilter} type="submit" className="btn btn-success3">Reset</button>
//             <br /><br />
//           </form>
//         </div>
//       </div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Book ID</th>
//             <th scope="col">Book Title</th>
//             <th scope="col">Book Desc</th>
//             <th scope="col">Author Name</th>
//             <th scope="col">No.Of Book Available</th>
//             <th scope="col">Purchase</th>
//           </tr>
//         </thead>
//         <tbody>
//           {getList.map((obj, index) => {
//             return (
//               <tr key={index}>
//                 <th scope="row">{index + 1}</th>
//                 <td>{obj.title}</td>
//                 <td>{obj.desc}</td>
//                 <td>{obj.auth}</td>
//                 <td>{obj.avail}</td>
//                 <td>
//                   <a href="" target="_blank" rel="noopener">Purchase</a>
//                 </td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   </div>);
// }
export default Search;