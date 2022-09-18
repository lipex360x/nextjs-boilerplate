import SvgContainer, { SvgContainerProps } from '@/components/bosons/SvgContainer';

export const Minus = (svgContainerProps: Omit<SvgContainerProps, 'children'>) => {
  return (
    <SvgContainer {...svgContainerProps}>
      <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
    </SvgContainer>
  );
};