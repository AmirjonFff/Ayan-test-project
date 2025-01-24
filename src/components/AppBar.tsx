import { ImageListItem, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setItemsPerPage, setQuery } from '../redux/blog/blogSlice';
import { RootState } from '../redux/store';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '80%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '50%',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
}));

export default function PrimarySearchAppBar() {

    const query = useSelector((state: RootState) => state.blog.query)
    const itemsPerPage = useSelector((state: RootState) => state.blog.itemsPerPage)

    const dispatch = useDispatch();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setQuery(event.target.value));
    };

    const handleItemsPerPageChange = (event: SelectChangeEvent) => {
        dispatch(setItemsPerPage(Number(event.target.value)));
        dispatch(setCurrentPage(1));
    };

    return (
        <AppBar position="static" sx={{ p: 1 }}>
            <Toolbar sx={{ maxWidth: '1300px', width: '80%', mx: 'auto', display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
                <ImageListItem sx={{ width: 150 }}>
                    <img src='/ayan-logo.png' />
                </ImageListItem>
                <Search>
                    <StyledInputBase
                        onChange={handleSearchChange}
                        value={query}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Select
                    id="demo-simple-select"
                    value={itemsPerPage.toLocaleString()}
                    onChange={handleItemsPerPageChange}
                    sx={{ m: 1, minWidth: 150, pr: 5 }}
                >
                    <MenuItem value={10}>10 элементов</MenuItem>
                    <MenuItem value={20}>20 элементов</MenuItem>
                    <MenuItem value={50}>50 элементов</MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    );
}
