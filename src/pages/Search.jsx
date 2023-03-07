import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const {searchTerm} = useParams()
  const { getSearchCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getSearchCampaigns(searchTerm);
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
  fetchCampaigns();
  }, [searchTerm]);

  return (
    <DisplayCampaigns 
      title="SearchTerm"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  )
}

export default Home