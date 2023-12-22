import React, { useEffect, useState } from 'react';
import { Collapse, Typography, Card, CardMedia, CardContent, CardActionArea, Grid, IconButton, Box } from '@mui/material';
import { Community, Home } from '../../Hooks/types';
import List from '../List/List';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

type Props = {
  communities?: Community[] | null;
  homes?: Home[] | null;
};

const CommunityList = ({ communities, homes }: Props) => {
  const [sortedCommunities, setSortedCommunities] = useState<Community[]>([]);
  const [selectedCommunityId, setSelectedCommunityId] = useState<string | null>(null);
  const isExpanded = (communityId: string) => selectedCommunityId === communityId;
  const defaultImg = 'https://liveintrinityhills.ca/wp-content/uploads/2018/08/trinity-hills-calgary-blog3.jpg';
  
  useEffect(() => {
    if (communities) {
      const sorted = [...communities].sort((a, b) => a.name.localeCompare(b.name));
      setSortedCommunities(sorted);
    }
  }, [communities]);

  if (!communities || !homes) {
    return <div>data is not available.</div>;
  }

  const handleCommunitySelect = (communityId: string) => {
    setSelectedCommunityId(selectedCommunityId === communityId ? null : communityId);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {sortedCommunities.map((community) => {
          const communityHomes = homes.filter(home => home.communityId === community.id);
          const averagePrice = communityHomes.length > 0
            ? (communityHomes.reduce((total, home) => total + home.price, 0) / communityHomes.length).toFixed(2).replace(/\.00$/, '')
            : 'n/a';
          return (
            <Grid item xs={12} md={6} xl={4} key={community.id}>
              <Card style={{ margin: '10px' }}>
                {communityHomes.length > 0 ? (
                  <CardActionArea onClick={() => handleCommunitySelect(community.id)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={community.imgUrl || defaultImg}
                      alt={community.name}
                    />
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography variant="h6">{community.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Group: {community.group}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Average Price: {averagePrice}
                          </Typography>
                        </Box>
                        <IconButton aria-label="show more">
                          {isExpanded(community.id) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                ) : (
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={community.imgUrl || defaultImg}
                      alt={community.name}
                    />
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                          <Typography variant="h6">{community.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Group: {community.group}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Average Price: n/a
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                )}
                {communityHomes.length > 0 && (
                  <Collapse in={isExpanded(community.id)} timeout="auto" unmountOnExit>
                    <List homes={communityHomes} communityName={community.name} />
                  </Collapse>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CommunityList;