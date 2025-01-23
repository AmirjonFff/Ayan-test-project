import { ImageListItem, MenuItem, Select } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setCurrentPage, setItemsPerPage } from '../features/blog/blogSlice';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '100%',
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
    React.useState<null | HTMLElement>(null);

    const itemsPerPage = useSelector((state: RootState) => state.blog.itemsPerPage)
    const dispatch = useDispatch();

    const handleItemsPerPageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(setItemsPerPage(event.target.value as number));
        dispatch(setCurrentPage(1));
    };

    return (
        <Box>
            <AppBar position="static" sx={{ p: 1 }}>
                <Toolbar sx={{ width: '100%', maxWidth: '1300px', mx: 'auto' }}>
                    <ImageListItem sx={{ width: 150 }}>
                        <img src='/ayan-logo.png' />
                    </ImageListItem>
                    <Search>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Select
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        style={{ marginRight: "20px", minWidth: "150px" }}
                    >
                        <MenuItem value={10}>10 элементов</MenuItem>
                        <MenuItem value={20}>20 элементов</MenuItem>
                        <MenuItem value={50}>50 элементов</MenuItem>
                    </Select>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
