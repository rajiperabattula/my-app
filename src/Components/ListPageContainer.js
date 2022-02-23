import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import '../scss/ListPage.scss';
import {connect} from 'react-redux';
import { fetchCat, fetchList } from '../redux';
// import history from '../history';

function ListPage(params){
    useEffect(()=>{
        params.fetchList();
        params.fetchCat();
    },[]);
    useEffect(()=>{
        if(params.listData.list){
            let initialList= params.listData.list.filter((eachItem)=>{
            return eachItem.categoryId===0;
            })
        setItems(initialList);
        }
        if(params.listData.cat[0]){
            setCat(params.listData.cat[0].name)
        }
    },[params]);
    const [items,setItems]=useState(params.listData.list);
    const [cat,setCat]=useState('');
    let history = useNavigate();
    function changeList(event){
            setCat(event.target.value);
            let selectedID = event.target.value === "Laptops" ? 0 : 1;
            const updatedList= params.listData.list.filter((eachItem)=>{
            return eachItem.categoryId===selectedID;
            })
        setItems(updatedList);
    }
    function displayCard(e,elem){
        params.setDetails(elem);
        history(`/details`);
    }
    return params.listData.loading ? 
    (
        <h4>Loading..</h4>
    ):
    (
        <>
        <div className='listPage-container'>
        <div className='dropdown'>
            <p>Product Category</p>
            <select id='select' className='dropdown-select' value={cat} onChange={changeList}>
                {/* <option value="All">All</option> */}
                {
                    params.listData.cat.map((ele)=>{
                        return(
                        <option value={ele.name} key={ele.id}>{ele.name}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className='list-wrap-container'>
            <div className='list-container'>
                {
                    items.map((elem)=>{
                        const {id,name,model,price,categoryId}=elem;
                        return(
                        <div className='list-eachCard' key={id} onClick={(e)=>displayCard(e,elem)}>
                            <div className='card'>
                                <div className='img_div'><img src={categoryId===0? "images/laptop1.png" : "images/mobile1.png"} alt='image'/></div>
                                <p className='name'>{name}</p>
                                <p className='model'>{model}</p>
                                <p className='price'>Rs. {price}</p>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
        </>
    )
}


const mapStateToProps = state => {
    return {
        listData: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchList: () => dispatch(fetchList()),
        fetchCat: () => dispatch(fetchCat())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ListPage);