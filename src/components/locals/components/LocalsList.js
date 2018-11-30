import React from 'react'
import Grid from '@material-ui/core/Grid';
import Local from './Local';

function LocalsList() {
    return (
        <Grid container className="locals-list">
            <Grid xs={12} item container spacing={16} className="locals-list-content">
                <Local />
            </Grid>
        </Grid>
    )
}

export default LocalsList
