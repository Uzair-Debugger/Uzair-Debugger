import React from 'react'
import Container from './layout/container'
import CustomButton from './general/custom-button'
import Typography from './general/Typography'

interface CardProps extends React.HTMLAttributes<HTMLDivElement>{}

export default function Card({...props}:CardProps) {
  return (
    <Container className='w-80 h-80 bg-white rounded-lg shadow-md flex flex-col items-center justify-center'
        {...props}>
        <Typography variant='h2' className='text-olive-600'>Card Title</Typography>
        {/* <img src="" alt="" /> */}
        <Typography variant='subtitle' className='text-olive-600 mb-4'>Card description goes here.</Typography>
        <CustomButton btnType='preview'>Learn More</CustomButton>
    </Container>
  )
}