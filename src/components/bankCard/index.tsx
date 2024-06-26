import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';



function BankCard({offer}) {
  return (
    <Card variant="outlined" sx={{ margin: "10px", marginLeft: "0px", padding: "10px"}}>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "flexStart", alignItems: "center"}}>
      <CardMedia
        sx={{ height: 50, width:50}}
        image={offer.logo}
        title="logo"  
          />
        <CardHeader sx={{width: "fitContent", padding: "10px"}}
        title={offer.name}
      />
      </div>
      
       <CardContent>   
      <Typography variant="body2" className='' sx={{
            width: "fitContent", display: "inline-block", float:"left", color: "gray"
      }} >
      Сумма
       </Typography>
          <Typography variant="body2" className='' sx={{
            width: "fitContent", display: "inline-block", float:"right", color: "black", fontWeight:"700"
      }} >
          {offer.amount} ₽
      </Typography>
    </CardContent>
      </Card>
)
};


export default function BankCards({products, sort, filtered}) {
  return (
    <Box sx={{ width: "275px" }}>
      {products.sort((a, b) => {
        if (sort == true) {
          return b.amount - a.amount
        } else {
          return a.amount - b.amount
         }
      }).filter(prod => {
       return (filtered > 0) ? (prod.amount >= filtered) : prod
      }).map((product, i) => {
          return <BankCard key={i} offer={product}/>
        })
      
      
      }
    </Box>

  )
}
