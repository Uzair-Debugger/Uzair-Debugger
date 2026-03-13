'use client'
import Container from '@/components/layout/container';
import CustomButton from '../../../components/general/custom-button';

export default function App() {
  const handleClick = () => {
    console.log('Button clicked!');
    alert('Button clicked!');
  };

  return (
    <Container>
      {/* With click handler */}
      <CustomButton onClick={handleClick}>
        Click Handler
      </CustomButton>

      {/* With custom className */}
      <CustomButton 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Styled Button
      </CustomButton>

      {/* As submit button */}
      <CustomButton type="submit">
        Submit Form
      </CustomButton>

      {/* Disabled button */}
      <CustomButton disabled>
        Disabled Button
      </CustomButton>
    </Container>
  );
}