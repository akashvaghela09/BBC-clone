import React from "react";
import style from "../../Styles/searchSingleArticle.module.css";
import { BiTimeFive } from 'react-icons/bi';
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSingleIdData } from "../../../Redux/news/action";
// import Skeleton from "react-loading-skeleton";

function NewsSingleArticles({item,isLoading}) {
    const {category,id} = useParams()
    const {singleIdData,isLoadingId,isErrorId} = useSelector(state => state.news,shallowEqual)
    const history = useHistory()
    // console.log(category,id)
    const dispatch = useDispatch()

    React.useEffect(() => {
        if(typeof id !== undefined && typeof category !== undefined){
            dispatch(getSingleIdData(id))
        }
        else history.replace("/news")
    },[dispatch])

    console.log(singleIdData)
//   const locategoryion=useLocation()
//   console.log(location)
//   var pathname=location.pathname
//   console.log(pathname)
//   var search=location.search
//   console.log(search)
  
  return singleIdData.id ? (
    <div className={style.single__article}>
      {!isLoadingId?
      <img src={singleIdData.img[0].img_url} alt="img" />:<div  width="420px" height="250px"/>}
     
      <div className={style.single__article__text}>
        <div>
         <Link to={"/news/"+singleIdData.id} className={style.single__article__heading}><p>{!isLoadingId?singleIdData.headline:<div count={2}/>}</p></Link>
          <p>{!isLoadingId?singleIdData.article_data[0].sub_title:
          <div count={1}/>}
          </p>
        </div>
       
        {!isLoadingId?<div>
              <div> <span class={style.single__time__icon}><BiTimeFive/></span> {singleIdData.published_at}</div>
            
            <div>Programmes</div>
            <div>BBC one</div>
            
        </div>:
        <div count={1}/>}
      </div>
    </div>
  ): null
}

export {NewsSingleArticles}

