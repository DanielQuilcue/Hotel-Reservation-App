import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import HotelList from './HotelList';

function Item(props) {
  const { sx, children, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

Item.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default function GridTemplateColumns() {
  // Crear un array con la cantidad de elementos deseados
  const items = [1, 2, 3];

  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {items.map((item, index) => (
          <Item key={index}>
            <HotelList />
          </Item>
        ))}
      </Box>
    </div>
  );
}
