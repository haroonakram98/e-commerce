import React from "react";
import styled from "styled-components";
import {
  Spacing,
  FontSize,
  FontWeight,
  Palette,
} from "../../../../theme/theme";

const TypographyWrapper = styled.span`
  display: block;
  color: ${({ color, theme }) => (color ? theme.palette[color] : "inherit")};
  font-size: ${({ fs, theme }) =>
    fs ? theme.typography.fontSize[fs] : "inherit"};
  font-weight: ${({ fw, theme }) =>
    fw ? theme.typography.fontWeight[fw] : "inherit"};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  line-height: ${({ lineHeight }) => lineHeight};
  margin-bottom: ${({ marginBottom, theme }) =>
    marginBottom ? theme.spacing[marginBottom] : "inherit"};
`;

const Typography = ({
  className,
  color,
  fs,
  fw,
  textAlign,
  textTransform = "none",
  lineHeight,
  marginBottom,
  children,
}) => {
  return (
    <TypographyWrapper
      className={className}
      color={color}
      fs={fs}
      fw={fw}
      textAlign={textAlign}
      textTransform={textTransform}
      lineHeight={lineHeight}
      marginBottom={marginBottom}
    >
      {children}
    </TypographyWrapper>
  );
};

export default Typography;