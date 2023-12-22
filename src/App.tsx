import React from 'react';
import { Alert, CircularProgress, CssBaseline, Grid } from '@mui/material';
import Header from './components/Header/Header';
import CommunityList from './components/CommunityList/CommunityList';
import { Community, Home } from './Hooks/types';
import useFetchData from './Hooks/useFetchData';

const App: React.FC = () => {
  const communitiesUrl = '/openhouse-ai-fe-coding-test/communities.json';
  const homesUrl = '/openhouse-ai-fe-coding-test/homes.json';

  const { data: communities, loading: communitiesLoading, error: communitiesError } = useFetchData<Community>(communitiesUrl);
  const { data: homes, loading: homesLoading, error: homesError } = useFetchData<Home>(homesUrl);

  if (communitiesError || homesError) {
    return <Alert severity="error">Error loading data!</Alert>;
  }

  if (communitiesLoading || homesLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12}>
          <CommunityList communities={communities} homes={homes} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;