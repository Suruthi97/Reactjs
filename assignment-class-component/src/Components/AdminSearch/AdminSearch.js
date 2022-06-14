import './AdminSearch.css';
import axios from 'axios';
import { Component } from 'react';
class AdminSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            index: -1,
            search: '',
            book: {
                title: '',
                desc: '',
                auth: '',
                avail: ''
            }
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
    onDeleteHandler = (index) => {
        let bookDetails = [...this.state.list];
        let id = bookDetails[index].id;
        axios.delete('http://localhost:3000/library/' + id).then((response) => {
            bookDetails.splice(index, 1);
            this.setState({ list: bookDetails });
        }).catch(() => {

        })
        // sessionStorage.setItem('bookDetails', JSON.stringify(bookDetails));
    }
    onEditHandler = (index) => {
        this.setState({
            book: {
                title: this.state.list[index].title,
                desc: this.state.list[index].desc,
                auth: this.state.list[index].auth,
                avail: this.state.list[index].avail
            },
            index: index
        })
    }
    onChangeHandler = (event) => {
        this.setState({
            book: {
                ...this.state.book, [event.target.name]: event.target.value
            }
        })
    }
    onChangeSearchHandler = (event) => {
        this.setState({ search: event.target.value });
    }
    onEditSubmitHandler = (event) => {
        event.preventDefault();
        let bookDetails = [...this.state.list];
        let id = bookDetails[this.state.index].id;
        axios.patch('http://localhost:3000/library/' + id, {
            title: this.state.book.title,
            desc: this.state.book.desc,
            auth: this.state.book.auth,
            avail: this.state.book.avail
        }).then(() => {
            this.setState({ list: bookDetails });
            bookDetails[this.state.index].title = this.state.book.title;
            bookDetails[this.state.index].desc = this.state.book.desc;
            bookDetails[this.state.index].auth = this.state.book.auth;
            bookDetails[this.state.index].avail = this.state.book.avail;
        }).catch(() => {

        })
        // sessionStorage.setItem('expenseDetails',JSON.stringify(expenseDetails));
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
    render() {
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
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
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
                                    <td><i onClick={() => this.onEditHandler(index)} data-toggle="modal" className="fa fa-pencil" aria-hidden="true" data-target="#edit"  ></i>
                                    </td>
                                    <td><i onClick={() => this.onDeleteHandler(index)} data-toggle="modal" className="fa fa-trash" aria-hidden="true" data-target="#delete"></i>
                                        <div className="container-fluid">

                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="modal" id="edit" role="dialog" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="classform1">
                                <br />
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-group">
                                                    <label>Book Title:</label>
                                                </div>
                                            </td>
                                            <td><input type="text" value={this.state.book.title} onChange={this.onChangeHandler} id="title" className="classlabel" name="title" /></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-group">
                                                    <label>Book Desc:</label>
                                                </div>
                                            </td>
                                            <td><input type="text" value={this.state.book.desc} onChange={this.onChangeHandler} id="desc" className="classlabel" name="desc" /></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-group">
                                                    <label>Author Name:</label>
                                                </div>
                                            </td>
                                            <td><input type="text" value={this.state.book.auth} onChange={this.onChangeHandler} id="name" className="classlabel" name="auth" /></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-group">
                                                    <label>Number of <br />Book Available:</label>
                                                </div>
                                            </td>
                                            <td><input type="number" value={this.state.book.avail} onChange={this.onChangeHandler} id="number" className="classlabel" name="avail" /></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={this.onEditSubmitHandler} data-dismiss="modal" className="btn btn-success">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal" id="delete" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Book details deleted successfully
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success1" data-dismiss="modal">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
// function AdminSearch() {
//     const [getList, setList] = useState([]);
//     const [getIndex, setIndex] = useState(-1);
//     const [getSearch, setSearch] = useState('');
//     const [getBook, setBook] = useState({
//         title: '',
//         desc: '',
//         auth: '',
//         avail: ''
//     })
//     useEffect(() => {
//         axios.get('http://localhost:3000/library').then((response) => {
//             console.log(response);
//             setList(response.data);
//         }).catch((error) => {
//             console.log(error);
//         })
//         // if (JSON.parse(sessionStorage.getItem('bookDetails')) && JSON.parse(sessionStorage.getItem('bookDetails')).length > 0) {
//         //     setList(JSON.parse(sessionStorage.getItem('bookDetails')))
//         // }
//     }, [])
//     const onDeleteHandler = (index) => {
//         let bookDetails = [...getList];
//         let id = bookDetails[index].id;
//         axios.delete('http://localhost:3000/library/' + id).then((response) => {
//             bookDetails.splice(index, 1);
//             setList(bookDetails);
//         }).catch(() => {

//         })
//         // sessionStorage.setItem('bookDetails', JSON.stringify(bookDetails));
//     }
//     const onChangeHandler = (event) => {
//         setBook({
//             ...getBook, [event.target.name]: event.target.value
//         })
//     }
//     const onChangeSearchHandler = (event) => {
//         setSearch(event.target.value);
//     }
//     const onEditHandler = (index) => {
//         setBook({
//             title: getList[index].title,
//             desc: getList[index].desc,
//             auth: getList[index].auth,
//             avail: getList[index].avail
//         })
//         setIndex(index);
//     }
//     const onEditSubmitHandler = (event) => {
//         event.preventDefault();
//         let bookDetails = [...getList];
//         let id = bookDetails[getIndex].id;
//         axios.patch('http://localhost:3000/library/' + id, {
//             title: getBook.title,
//             desc: getBook.desc,
//             auth: getBook.auth,
//             avail: getBook.avail
//         }).then(() => {
//             setList(bookDetails);
//             bookDetails[getIndex].title = getBook.title;
//             bookDetails[getIndex].desc = getBook.desc;
//             bookDetails[getIndex].auth = getBook.auth;
//             bookDetails[getIndex].avail = getBook.avail;
//         }).catch(() => {

//         })
//         // sessionStorage.setItem('expenseDetails',JSON.stringify(expenseDetails));
//     }
//     const searchFilter = (event) => {
//         event.preventDefault();
//         let details = getList.filter((obj) => {
//             return obj.title === getSearch;
//         })
//         setList(details);
//     }
//     const resetFilter = (event) => {
//         event.preventDefault();
//         setSearch('');
//         axios.get('http://localhost:3000/library').then((response) => {
//             console.log(response);
//             setList(response.data);
//         }).catch((error) => {
//             console.log(error);
//         })
//         // if (JSON.parse(sessionStorage.getItem('bookDetails')) && JSON.parse(sessionStorage.getItem('bookDetails')).length > 0) {
//         //     setList(JSON.parse(sessionStorage.getItem('bookDetails')))
//         // }

//     }
//     return (<div>
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-3">
//                     <form>
//                         <div><h2>Search Book</h2></div>
//                         <br />
//                         <label className="classlabel">Book Title: <input type="text" value={getSearch} onChange={onChangeSearchHandler} id="bookName" name="searchbookName" /></label>
//                         <br />
//                         <button onClick={searchFilter} type="submit" className="btn btn-success2">Search</button>
//                         <button onClick={resetFilter} type="submit" className="btn btn-success3">Reset</button>
//                         <br /><br />
//                     </form>
//                 </div>
//             </div>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">Book ID</th>
//                         <th scope="col">Book Title</th>
//                         <th scope="col">Book Desc</th>
//                         <th scope="col">Author Name</th>
//                         <th scope="col">No.Of Book Available</th>
//                         <th scope="col">Edit</th>
//                         <th scope="col">Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {getList.map((obj, index) => {
//                         return (
//                             <tr key={index}>
//                                 <th scope="row">{index +1}</th>
//                                 <td>{obj.title}</td>
//                                 <td>{obj.desc}</td>
//                                 <td>{obj.auth}</td>
//                                 <td>{obj.avail}</td>
//                                 <td><i onClick={() => onEditHandler(index)} data-toggle="modal" className="fa fa-pencil" aria-hidden="true" data-target="#edit"></i>
//                                 </td>
//                                 <td><i onClick={() => onDeleteHandler(index)} data-toggle="modal" className="fa fa-trash" aria-hidden="true" data-target="#delete"></i>
//                                     <div className="container-fluid">

//                                     </div>
//                                 </td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//         <div className="modal" id="edit" role="dialog">
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title">Edit details</h5>
//                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <form className="classform1">
//                             <br />
//                             <table>
//                                 <tbody>
//                                     <tr>
//                                         <td>
//                                             <div className="form-group">
//                                                 <label>Book Title:</label>
//                                             </div>
//                                         </td>
//                                         <td><input type="text" value={getBook.title} onChange={onChangeHandler} id="title" className="classlabel" name="title" /></td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             <div className="form-group">
//                                                 <label>Book Desc:</label>
//                                             </div>
//                                         </td>
//                                         <td><input type="text" value={getBook.desc} onChange={onChangeHandler} id="desc" className="classlabel" name="desc" /></td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             <div className="form-group">
//                                                 <label>Author Name:</label>
//                                             </div>
//                                         </td>
//                                         <td><input type="text" value={getBook.auth} onChange={onChangeHandler} id="name" className="classlabel" name="auth" /></td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             <div className="form-group">
//                                                 <label>Number of <br />Book Available:</label>
//                                             </div>
//                                         </td>
//                                         <td><input type="number" value={getBook.avail} onChange={onChangeHandler} id="number" className="classlabel" name="avail" /></td>
//                                     </tr>
//                                     <tr>
//                                         <td></td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </form>
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" onClick={onEditSubmitHandler} data-dismiss="modal" className="btn btn-success">Save changes</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="modal" id="delete" role="dialog">
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
//                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         Book details deleted successfully
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-success1" data-dismiss="modal">Ok</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>);
// }
export default AdminSearch;