import React from 'react';
import { Home } from '../../Hooks/types';
import { List as MuiList, ListItem, ListItemText, Paper, Typography, Card, CardContent, Box } from '@mui/material';

type Props = {
    homes?: Home[] | null;
    communityName?: string;
};

const List = ({ homes, communityName }: Props) => {
    if (!homes) {
        return <Typography variant="subtitle1">Homes data is not available.</Typography>;
      }

    return (
        <MuiList sx={{ width: '100%' }}>
            {homes.map(home => (
                <Paper key={home.id} sx={{ margin: '10px', backgroundColor: 'lightgrey' }}>
                    <Card>
                        <CardContent>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={`Community - ${communityName}`}
                                    secondary={
                                        <>
                                            <Typography component="span" variant="body2" color="text.primary">
                                                {home.type}
                                            </Typography >
                                            {` — $${home.price} - ${home.area} sqft`}
                                        </>
                                    }
                                />
                            </ListItem>
                        </CardContent>
                    </Card>
                </Paper>
            ))}
        </MuiList>
    );
};

export default List;