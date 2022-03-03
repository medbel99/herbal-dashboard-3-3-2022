import React,{useEffect,useState} from 'react';
import axios from "axios"
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import PageContainer from '~/components/layouts/PageContainer';

const HomepageDefaultPage = () => {
    useEffect(() => {
        getAllCategory();
      },[]);
    const [data,setData]= useState([])
    const getAllCategory = async ()=>{
        const response = await axios.get("https://herbalbackend.herokuapp.com/api/categorie")
        setData(response.data)
    }
    console.log("HADI DATA",data)
    return (
        <PageContainer title="HERBAL">
            <main id="homepage-1">
                <HomeDefaultBanner />
                <SiteFeatures />
                <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />
                <HomeAdsColumns />
                <HomeDefaultTopCategories />
                {data.length>0?data.map((row)=>(
                    <HomeDefaultProductListing  key={row.idCategoryClient}
                    categorieId={row.idCategoryClient}
                    collectionSlug={row.nomCategory}
                    title={row.nomCategory}
                />)):null} 
                {/* <HomeDefaultProductListing
                    collectionSlug="COSMETIQUES"
                    title="COSMETIQUES"
                />
                <HomeDefaultProductListing
                    collectionSlug="HERBAL"
                    title="HERBAL"
                /> */}
                <HomeAds />
                <DownLoadApp />
                {/* <NewArrivals collectionSlug="new-arrivals-products" /> */}
                {/* <Newletters /> */}
            </main>
        </PageContainer>
    );
};

export default HomepageDefaultPage;
