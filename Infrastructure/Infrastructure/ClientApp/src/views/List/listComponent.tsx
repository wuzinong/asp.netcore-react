import React from 'react';
import List from '../../components/List';
import {Link} from 'react-router-dom'; 
import {ListData} from '../../types/index'
const classNames = require('./list.scss');



 
export default class ListComponent extends React.Component<ListData,ListData>{
    constructor(props:any){
        super(props);
        this.state={
            listData:[],
            listComponent:null
        };
    }
    search(){
        // let value = this.searchInput.value;
        // const {filterList} = this.props;
        // filterList(value);
    }
    componentDidMount(){
        
    }
    fetchData(){
        const {initList} = this.props;
        initList();
    }
    render(){
        const {listData=[]} = this.props; 
        
        return (<div className={classNames.listContainer+" mylist"}>
           <header><Link to="/">back &gt;</Link>This is a test list <button onClick={()=>{this.fetchData()}}>Get Data</button></header>
           {/* <div>
               <input ref={(value)=>this.searchInput = value} 
                      onKeyUp={()=>{this.search()}} type="text" placeholder="search ..."/>
            </div> */}
               <List listData={listData}/> 
        </div>)
    }
}