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
        btnType="link"
        className="bg-red-500 hover:bg-red-600 text-white dark:bg-[var(--app-gray-500)]"
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