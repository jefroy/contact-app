import React from 'react';
import { Search, Grid, Header, Segment, Label } from 'semantic-ui-react';
import SelectSearch, {fuzzySearch} from 'react-select-search';

const style = (contact) => {
    return(
        null
    );
}

function SearchCM(props) {

    return (
        <Grid>
            <Grid.Column width={6}>
                <SelectSearch
                    options={props.contacts}
                    search
                    filterOptions={fuzzySearch}
                    emptyMessage="Not found"
                    placeholder="find yuh fren"
                />
            </Grid.Column>
        </Grid>
    );
}

export default SearchCM;
