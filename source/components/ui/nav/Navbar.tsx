import Reeact from "react";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Typography from '@mui/material/Typography';

const Navbar: Reeact.FC = () => {
    return (
        <AppBar position="static" className='bg-deep-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <ProductionQuantityLimitsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SHOPIXOGO
                    </Typography>

                    <ProductionQuantityLimitsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SHOPIXOGO
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export { Navbar };