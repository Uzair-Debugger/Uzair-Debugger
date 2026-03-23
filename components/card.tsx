import React from 'react'
import Container from './layout/container'
import CustomButton from './general/custom-button'
import Typography from './general/Typography'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  project:{
    id:string;
    title: string;
    description: string;
    features: string[];
    techStack: string[];
    image: string;
    category: string;
    status: string;
  };

  index:number
 }

export default function Card({ project, index, ...props }: CardProps) {
  const isEven = index % 2 === 0;

  return (
    <Container className='my-2'>
      <div
        {...props}
        className="grid md:grid-cols-2 grid-cols-1 items-stretch"
      >
        {/* Image */}
        <div className={`${isEven ? 'md:order-1' : 'md:order-2'} flex items-center justify-center h-full bg-[var(--app-gray-100)] w-full rounded-l-sm`}>
          <img src={project.image} alt={project.title} />
        </div>

        {/* Content */}
        <div className={`${isEven ? 'md:order-2' : 'md:order-1'} flex flex-col justify-center p-5 h-full bg-[var(--app-gray-50)] w-full rounded-r-sm`}>
          <Typography variant='h3'>{project.title}</Typography>
          <Typography variant='body2' className='leading-snug my-5'>{project.description}</Typography>
          <div className='flex gap-3 flex-wrap'>
            {project.techStack.map((tech, idx) => (
              <CustomButton key={`${tech}-${idx}`} btnType='link'>{tech}</CustomButton>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}